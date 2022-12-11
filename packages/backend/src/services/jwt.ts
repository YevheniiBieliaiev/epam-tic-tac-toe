import jwt from 'jsonwebtoken';
import type { RefreshToken } from '@prisma/client';
import type { IJWTUserDTO } from '@interfaces';
import type { AuthRepository } from '@repositories';
import { getEnv } from '@helpers';

interface GenTokens {
  accessToken: string;
  refreshToken: string;
}

interface TokensBase {
  payload: IJWTUserDTO;
}

export class JWTService {
  private _authRepository: AuthRepository;

  private _expInAccessT = getEnv('JWT_ACCESS_TOKEN_EXPIRATION');

  private _expInRefreshT = getEnv('JWT_REFRESH_TOKEN_EXPIRATION');

  private _expInEmailT = getEnv('JWT_RESET_EMAIL_TOKEN_EXPIRATION');

  private _secretAccess = getEnv('JWT_SECRET_ACCESS_TOKEN');

  private _secretRefresh = getEnv('JWT_SECRET_REFRESH_TOKEN');

  private _secretEmail = getEnv('JWT_SECRET_EMAIL_TOKEN');

  private _maxSessions = +getEnv('MAX_SESSIONS');

  constructor({ authRepository }: { authRepository: AuthRepository }) {
    this._authRepository = authRepository;
  }

  public createPayload({ user }: { user: IJWTUserDTO }): IJWTUserDTO {
    return {
      id: user.id,
      nickname: user.nickname,
      role: user.role,
    };
  }

  public generateAccessTokens({ payload }: TokensBase): GenTokens {
    const accessToken = jwt.sign(payload, this._secretAccess, {
      expiresIn: this._expInAccessT,
    });
    const refreshToken = jwt.sign(payload, this._secretRefresh, {
      expiresIn: this._expInRefreshT,
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  public accessTokenValidation({
    token,
  }: {
    token: string;
  }): IJWTUserDTO | null {
    try {
      const userData = <IJWTUserDTO>jwt.verify(token, this._secretAccess);

      return userData;
    } catch {
      return null;
    }
  }

  public refreshTokenValidation({
    token,
  }: {
    token: string;
  }): IJWTUserDTO | null {
    try {
      const userData = <IJWTUserDTO>jwt.verify(token, this._secretRefresh);

      return userData;
    } catch {
      return null;
    }
  }

  public async saveRefreshToken({
    userId,
    refreshToken,
  }: {
    userId: string;
    refreshToken: string;
  }): Promise<RefreshToken> {
    const sessions = await this._authRepository.getUserSessions({ userId });

    if (sessions.length === this._maxSessions) {
      const { id } = sessions[0];
      await this._authRepository.deleteRefreshToken({ tokenId: id });

      return this._authRepository.saveRefreshToken({ userId, refreshToken });
    }

    return this._authRepository.saveRefreshToken({ userId, refreshToken });
  }

  public generateEmailToken({ payload }: TokensBase): string {
    return jwt.sign(payload, this._secretEmail, {
      expiresIn: this._expInEmailT,
    });
  }

  public emailTokenValidation({
    token,
  }: {
    token: string;
  }): IJWTUserDTO | null {
    try {
      const userData = <IJWTUserDTO>jwt.verify(token, this._secretEmail);

      return userData;
    } catch {
      return null;
    }
  }
}
