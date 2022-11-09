import type { PrismaClient } from '@prisma/client';
import type { InitRepositories } from '@interfaces';
import { HealthRepository } from './health';

export const initRepositories = ({
  prismaClient,
}: {
  prismaClient: PrismaClient;
}): InitRepositories => ({
  healthRepository: new HealthRepository({ prismaClient }),
});

export type Repositories = ReturnType<typeof initRepositories>;

export { type HealthRepository };
