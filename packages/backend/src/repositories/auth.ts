import type { PrismaClient, RefreshToken, User } from '@prisma/client';
import type {
  IUserCreating,
  IUserCreated,
  IUser,
  IAuthID,
  IUserNickname,
  IUserHashes,
  ISessions,
} from '@interfaces';
import { Order } from '@tic-tac-toe/shared';

export class AuthRepository {
  private _dbClient: PrismaClient;

  constructor({ prismaClient }: { prismaClient: PrismaClient }) {
    this._dbClient = prismaClient;
  }

  public findUserById({ userId }: { userId: string }): Promise<IAuthID> {
    return this._dbClient.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        tokenEmail: true,
        avatar: true,
        nickname: true,
        role: true,
      },
    });
  }

  public findUserByEmail({ email }: { email: string }): Promise<IUser> {
    return this._dbClient.user.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        avatar: true,
        email: true,
        tokenEmail: true,
        nickname: true,
        role: true,
        isActivated: true,
      },
    });
  }

  public findUserByNickname({
    nickname,
  }: {
    nickname: string;
  }): Promise<IUserNickname> {
    return this._dbClient.user.findFirst({
      where: {
        nickname,
      },
      select: {
        nickname: true,
      },
    });
  }

  public createUser({
    userData,
  }: {
    userData: IUserCreating;
  }): Promise<IUserCreated> {
    const { email, nickname, passwordHash, salt, tokenEmail } = userData;

    return this._dbClient.user.create({
      data: {
        nickname,
        email,
        salt,
        passwordHash,
        tokenEmail,
      },
      select: {
        tokenEmail: true,
      },
    });
  }

  public confirmAccount({ userId }: { userId: string }): Promise<User> {
    return this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        tokenEmail: null,
        isActivated: true,
      },
    });
  }

  public getUserHashes({ userId }: { userId: string }): Promise<IUserHashes> {
    return this._dbClient.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        salt: true,
        passwordHash: true,
      },
    });
  }

  public saveRefreshToken({
    userId,
    refreshToken,
  }: {
    userId: string;
    refreshToken: string;
  }): Promise<RefreshToken> {
    return this._dbClient.refreshToken.create({
      data: {
        userId,
        token: refreshToken,
      },
    });
  }

  public findRefreshToken({
    refreshToken,
  }: {
    refreshToken: string;
  }): Promise<IAuthID> {
    return this._dbClient.refreshToken.findFirst({
      where: {
        token: refreshToken,
      },
      select: {
        id: true,
      },
    });
  }

  public getUserSessions({ userId }: { userId: string }): Promise<ISessions[]> {
    return this._dbClient.refreshToken.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: Order.ASC,
      },
      select: {
        id: true,
        token: true,
      },
    });
  }

  public updateRefreshToken({
    tokenId,
    refreshToken,
  }: {
    tokenId: string;
    refreshToken: string;
  }): Promise<RefreshToken> {
    return this._dbClient.refreshToken.update({
      where: {
        id: tokenId,
      },
      data: {
        token: refreshToken,
      },
    });
  }

  public deleteRefreshToken({
    tokenId,
  }: {
    tokenId: string;
  }): Promise<RefreshToken> {
    return this._dbClient.refreshToken.delete({
      where: {
        id: tokenId,
      },
    });
  }

  public changePassword({
    userId,
    passwordHash,
    salt,
    passwordUpdatedAt,
  }: {
    userId: string;
    passwordHash: string;
    salt: string;
    passwordUpdatedAt: Date;
  }): Promise<User> {
    return this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        passwordHash,
        salt,
        passwordUpdatedAt,
      },
    });
  }
}
