import type { PrismaClient } from '@prisma/client';

export class HealthRepository {
  private _dbClient: PrismaClient;

  constructor({ prismaClient }: { prismaClient: PrismaClient }) {
    this._dbClient = prismaClient;
  }

  public select(): Promise<unknown> {
    return this._dbClient.$queryRaw`SELECT 1`;
  }
}
