import type { PrismaClient } from '@prisma/client';
import type {
  IResponseProfile,
  IResponseUpdNickname,
  IResponseUpdEmail,
  IResponseUpdAvatar,
} from '@tic-tac-toe/shared';

export class ProfileRepository {
  private _dbClient: PrismaClient;

  constructor({ prismaClient }: { prismaClient: PrismaClient }) {
    this._dbClient = prismaClient;
  }

  public getProfile({ userId }: { userId: string }): Promise<IResponseProfile> {
    return this._dbClient.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        email: true,
        passwordUpdatedAt: true,
      },
    });
  }

  public async isNicknameExists({ userId, nickname }): Promise<boolean> {
    const user = await this._dbClient.user.findFirst({
      where: {
        nickname,
        NOT: {
          id: userId,
        },
      },
      select: {
        id: true,
      },
    });

    if (!user) {
      return false;
    }

    return true;
  }

  public updateNickname({
    userId,
    nickname,
  }: {
    userId: string;
    nickname: string;
  }): Promise<IResponseUpdNickname> {
    return this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        nickname,
      },
      select: {
        nickname: true,
      },
    });
  }

  public updateEmail({
    userId,
    email,
    tokenEmail,
  }: {
    userId: string;
    email: string;
    tokenEmail: string;
  }): Promise<IResponseUpdEmail> {
    return this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        email,
        tokenEmail,
        isActivated: false,
      },
      select: {
        email: true,
        isActivated: true,
      },
    });
  }

  public confirmEmail({
    userId,
  }: {
    userId: string;
  }): Promise<IResponseUpdEmail> {
    return this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        tokenEmail: undefined,
        isActivated: true,
      },
      select: {
        isActivated: true,
      },
    });
  }

  public updateUserAvatar({
    userId,
    avatar,
  }: {
    userId: string;
    avatar: string;
  }): Promise<IResponseUpdAvatar> {
    return this._dbClient.user.update({
      where: {
        id: userId,
      },
      data: {
        avatar,
      },
      select: {
        avatar: true,
      },
    });
  }
}
