import type { PrismaClient } from '@prisma/client';
import type { InitRepositories } from '@interfaces';
import { HealthRepository } from './health';
import { AuthRepository } from './auth';
import { ProfileRepository } from './profile';
import { GameStatRepository } from './game-stat';

export const initRepositories = ({
  prismaClient,
}: {
  prismaClient: PrismaClient;
}): InitRepositories => ({
  healthRepository: new HealthRepository({ prismaClient }),
  authRepository: new AuthRepository({ prismaClient }),
  profileRepository: new ProfileRepository({ prismaClient }),
  gameStatRepository: new GameStatRepository({ prismaClient }),
});

export type Repositories = ReturnType<typeof initRepositories>;

export {
  type HealthRepository,
  type AuthRepository,
  type ProfileRepository,
  type GameStatRepository,
};
