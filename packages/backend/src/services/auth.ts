import type { AuthRepository } from '@repositories';
import type { HashService, JWTService, EmailService } from '@services';
import type { ICandidate, IResponseLogin } from '@tic-tac-toe/shared';
import { HttpError, HttpStatusCode } from '@tic-tac-toe/shared';
import type {
  IUserCreated,
  IUserSignIn,
  ISigned,
  IUpdateTokens,
  IAuthID,
  ISocketUserData,
} from '@interfaces';
import { type EmailSubjects, ErrorMessages } from '@enums';
import type { TTemplates } from '@types';
import {
  generateToken,
  validateAccountData,
  validateConfirmAccount,
} from '@helpers';

export class AuthServices {
  private _authRepository: AuthRepository;

  private _hashService: HashService;

  private _jwtService: JWTService;

  private _emailService: EmailService;

  constructor({
    authRepository,
    hashService,
    jwtService,
    emailService,
  }: {
    authRepository: AuthRepository;
    hashService: HashService;
    jwtService: JWTService;
    emailService: EmailService;
  }) {
    this._authRepository = authRepository;
    this._hashService = hashService;
    this._jwtService = jwtService;
    this._emailService = emailService;
  }

  public async createUser({
    nickname,
    email,
    password,
  }: ICandidate): Promise<IUserCreated> {
    validateAccountData({ nickname, email, password });

    const candidate = await this._authRepository.findUserByNickname({
      nickname,
    });
    if (candidate?.nickname) {
      throw new HttpError({
        status: HttpStatusCode.BAD_REQUEST,
        message: ErrorMessages.NICKNAME_EXISTS,
      });
    }

    const isEmailExists = await this._authRepository.findUserByEmail({ email });
    if (isEmailExists?.email) {
      throw new HttpError({
        status: HttpStatusCode.BAD_REQUEST,
        message: ErrorMessages.EMAIL_EXISTS,
      });
    }
    const tokenEmail = generateToken();

    const { passwordHash, salt } = this._hashService.setPassword({ password });

    return this._authRepository.createUser({
      userData: { email, nickname, passwordHash, salt, tokenEmail },
    });
  }

  public async findUserById({ userId }: { userId: string }): Promise<IAuthID> {
    return await this._authRepository.findUserById({ userId });
  }

  public async findSocketUser({
    userId,
  }: {
    userId: string;
  }): Promise<ISocketUserData> {
    return await this._authRepository.findSocketUser({ userId });
  }

  public async sendEmail(
    email: string,
    token: string,
    pattern: TTemplates,
    emailSubject: EmailSubjects,
  ): Promise<void> {
    const emailOptions = this._emailService.createEmailOptions(
      pattern,
      email,
      token,
      emailSubject,
    );

    await this._emailService.sendEmail(emailOptions);
  }

  public async signIn({ email, password }: IUserSignIn): Promise<ISigned> {
    const user = await this._authRepository.findUserByEmail({ email });
    if (!user?.email) {
      throw new HttpError({
        status: HttpStatusCode.BAD_REQUEST,
        message: ErrorMessages.NOT_FOUND_EMAIL,
      });
    }

    if (!user?.isActivated) {
      throw new HttpError({
        status: HttpStatusCode.BAD_REQUEST,
        message: ErrorMessages.CONFIRM_EMAIL,
      });
    }

    const isCorrectPassword = await this._hashService.checkPassword({
      userId: user.id,
      password,
    });
    if (!isCorrectPassword) {
      throw new HttpError({
        status: HttpStatusCode.BAD_REQUEST,
        message: ErrorMessages.WRONG_PASSWORD_OR_EMAIL,
      });
    }

    const { avatar, nickname, gameUserStat } = user;

    const payload = this._jwtService.createPayload({ user });
    const { accessToken, refreshToken } = this._jwtService.generateAccessTokens(
      {
        payload,
      },
    );

    await this._jwtService.saveRefreshToken({ userId: user.id, refreshToken });

    return {
      avatar,
      nickname,
      gameUserStat,
      accessToken,
      refreshToken,
    };
  }

  public async signOut({
    refreshToken,
  }: {
    refreshToken: string;
  }): Promise<void> {
    const { id } = await this._authRepository.findRefreshToken({
      refreshToken,
    });

    if (!id) {
      throw new HttpError({
        status: HttpStatusCode.UNAUTHORIZED,
        message: ErrorMessages.UNAUTHORIZED_SESSION,
      });
    }

    await this._authRepository.deleteRefreshToken({ tokenId: id });
  }

  public async confirmAccount({
    email,
    tokenEmail,
  }: {
    email: string;
    tokenEmail: string;
  }): Promise<void> {
    validateConfirmAccount({ email, tokenEmail });

    const user = await this._authRepository.findUserByEmail({
      email,
    });
    if (!user?.id) {
      throw new HttpError({
        status: HttpStatusCode.BAD_REQUEST,
        message: ErrorMessages.USER_DOES_NOT_EXIST,
      });
    }

    if (tokenEmail !== user.tokenEmail) {
      throw new HttpError({
        status: HttpStatusCode.BAD_REQUEST,
        message: ErrorMessages.EMAIL_TOKEN_ERROR,
      });
    }

    await this._authRepository.confirmAccount({ userId: user.id });

    return;
  }

  public async getEmailToken({ email }: { email: string }): Promise<string> {
    const user = await this._authRepository.findUserByEmail({ email });

    if (!user?.email) {
      throw new HttpError({
        status: HttpStatusCode.BAD_REQUEST,
        message: ErrorMessages.NOT_FOUND_EMAIL,
      });
    }

    const payload = this._jwtService.createPayload({ user });

    return this._jwtService.generateEmailToken({ payload });
  }

  public async resetPassword({
    token,
    password,
    passwordUpdatedAt,
  }: {
    token: string;
    password: string;
    passwordUpdatedAt: Date;
  }): Promise<ISigned> {
    const userData = this._jwtService.emailTokenValidation({ token });
    if (!userData?.id) {
      throw new HttpError({
        status: HttpStatusCode.BAD_REQUEST,
        message: ErrorMessages.EMAIL_TOKEN_ERROR,
      });
    }

    const isUserExist = await this._authRepository.findUserById({
      userId: userData.id,
    });
    if (!isUserExist?.id) {
      throw new HttpError({
        status: HttpStatusCode.BAD_REQUEST,
        message: ErrorMessages.USER_DOES_NOT_EXIST,
      });
    }

    const { passwordHash, salt } = this._hashService.setPassword({ password });

    await this._authRepository.changePassword({
      userId: userData.id,
      passwordHash,
      salt,
      passwordUpdatedAt,
    });

    const { id, avatar, nickname, role, gameUserStat } = isUserExist;

    const payload = this._jwtService.createPayload({
      user: { id, nickname, role },
    });
    const { accessToken, refreshToken } = this._jwtService.generateAccessTokens(
      {
        payload,
      },
    );

    await this._jwtService.saveRefreshToken({
      userId: isUserExist.id,
      refreshToken,
    });

    return {
      avatar,
      nickname,
      gameUserStat,
      accessToken,
      refreshToken,
    };
  }

  public async updateTokens({
    token,
  }: {
    token: string;
  }): Promise<IUpdateTokens & IResponseLogin> {
    const currentRefreshToken = await this._authRepository.findRefreshToken({
      refreshToken: token,
    });

    if (!currentRefreshToken) {
      throw new HttpError({
        status: HttpStatusCode.UNAUTHORIZED,
        message: ErrorMessages.UNAUTHORIZED_SESSION,
      });
    }

    const userData = this._jwtService.refreshTokenValidation({
      token,
    });
    if (!userData) {
      await this._authRepository.deleteRefreshToken({
        tokenId: currentRefreshToken.id,
      });

      throw new HttpError({
        status: HttpStatusCode.UNAUTHORIZED,
        message: ErrorMessages.UNAUTHORIZED_SESSION,
      });
    }

    const user = await this._authRepository.findUserById({
      userId: userData.id,
    });

    const payload = this._jwtService.createPayload({ user: userData });
    const { accessToken, refreshToken } = this._jwtService.generateAccessTokens(
      { payload },
    );

    await this._authRepository.updateRefreshToken({
      tokenId: currentRefreshToken.id,
      refreshToken,
    });

    return {
      avatar: user.avatar,
      nickname: user.nickname,
      accessToken,
      refreshToken,
      gameUserStat: user.gameUserStat,
    };
  }

  public async updateOnlineStatus({
    userId,
    status,
  }: {
    userId: string;
    status: boolean;
  }): Promise<void> {
    await this._authRepository.updateOnlineStatus({ userId, status });
  }
}
