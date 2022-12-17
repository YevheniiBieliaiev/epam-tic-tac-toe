import type { ProfileRepository, AuthRepository } from '@repositories';
import type { S3StorageService, HashService, EmailService } from '@services';
import type {
  IResponseProfile,
  IResponseUpdEmail,
  IResponseUpdNickname,
  IResponseVerifyEmail,
} from '@tic-tac-toe/shared';
import { HttpError, HttpStatusCode } from '@tic-tac-toe/shared';
import { ErrorMessages, EmailSubjects } from '@enums';
import {
  generateToken,
  validateEmail,
  validateNickname,
  validatePassword,
} from '@helpers';

export class ProfileServices {
  private _authRepository: AuthRepository;

  private _profileRepository: ProfileRepository;

  private _hashService: HashService;

  private _storageService: S3StorageService;

  private _emailService: EmailService;

  constructor({
    authRepository,
    profileRepository,
    hashService,
    storageService,
    emailService,
  }: {
    authRepository: AuthRepository;
    profileRepository: ProfileRepository;
    hashService: HashService;
    storageService: S3StorageService;
    emailService: EmailService;
  }) {
    this._authRepository = authRepository;
    this._profileRepository = profileRepository;
    this._hashService = hashService;
    this._storageService = storageService;
    this._emailService = emailService;
  }

  public async getProfile({
    userId,
  }: {
    userId: string;
  }): Promise<IResponseProfile> {
    const user = await this._profileRepository.getProfile({ userId });
    if (!user?.email) {
      throw new HttpError({
        status: HttpStatusCode.UNAUTHORIZED,
        message: ErrorMessages.USER_DOES_NOT_EXIST,
      });
    }

    return user;
  }

  public async updatePassword({
    userId,
    currentPassword,
    newPassword,
  }: {
    userId: string;
    currentPassword: string;
    newPassword: string;
  }): Promise<void> {
    validatePassword({ password: newPassword });

    const user = await this._authRepository.findUserById({ userId });
    if (!user.id) {
      throw new HttpError({
        status: HttpStatusCode.UNAUTHORIZED,
        message: ErrorMessages.USER_DOES_NOT_EXIST,
      });
    }

    const isCorrectPassword = await this._hashService.checkPassword({
      userId,
      password: currentPassword,
    });
    if (!isCorrectPassword) {
      throw new HttpError({
        status: HttpStatusCode.BAD_REQUEST,
        message: ErrorMessages.WRONG_CURRENT_PASSWORD,
      });
    }

    const { passwordHash, salt } = this._hashService.setPassword({
      password: newPassword,
    });

    await this._authRepository.changePassword({ userId, passwordHash, salt });

    return;
  }

  public async updateEmail({
    userId,
    email,
  }: {
    userId: string;
    email: string;
  }): Promise<IResponseUpdEmail> {
    validateEmail({ email });

    const user = await this._authRepository.findUserById({ userId });
    if (!user?.id) {
      throw new HttpError({
        status: HttpStatusCode.UNAUTHORIZED,
        message: ErrorMessages.USER_DOES_NOT_EXIST,
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

    const updatedData = await this._profileRepository.updateEmail({
      userId,
      email,
      tokenEmail,
    });

    const emailOptions = this._emailService.createEmailOptions(
      'update-email',
      email,
      tokenEmail,
      EmailSubjects.EMAIL_VERIFICATION,
    );
    await this._emailService.sendEmail(emailOptions);

    return updatedData;
  }

  public async emailVerification({
    userId,
    tokenEmail,
  }: {
    userId: string;
    tokenEmail: string;
  }): Promise<IResponseVerifyEmail> {
    const user = await this._authRepository.findUserById({ userId });
    if (!user?.id) {
      throw new HttpError({
        status: HttpStatusCode.UNAUTHORIZED,
        message: ErrorMessages.USER_DOES_NOT_EXIST,
      });
    }

    if (user.tokenEmail !== tokenEmail) {
      throw new HttpError({
        status: HttpStatusCode.BAD_REQUEST,
        message: ErrorMessages.EMAIL_TOKEN_ERROR,
      });
    }

    const { isActivated } = await this._profileRepository.confirmEmail({
      userId,
    });

    return {
      isActivated,
    };
  }

  public async updateNickname({
    userId,
    nickname,
  }: {
    userId: string;
    nickname: string;
  }): Promise<IResponseUpdNickname> {
    validateNickname({ nickname });

    const user = await this._authRepository.findUserById({ userId });

    if (!user?.id) {
      throw new HttpError({
        status: HttpStatusCode.UNAUTHORIZED,
        message: ErrorMessages.USER_DOES_NOT_EXIST,
      });
    }

    const IsNicknameExists = await this._profileRepository.isNicknameExists({
      userId,
      nickname,
    });
    if (IsNicknameExists) {
      throw new HttpError({
        status: HttpStatusCode.BAD_REQUEST,
        message: ErrorMessages.NICKNAME_EXISTS,
      });
    }

    const userNickname = await this._profileRepository.updateNickname({
      userId,
      nickname,
    });

    return userNickname;
  }
}
