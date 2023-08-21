import type { PrismaClient } from '@prisma/client';
import { HealthRepository } from './health';
import { AuthRepository } from './auth';
import { ProfileRepository } from './profile';
import { GameStatRepository } from './game-stat';

export interface InitRepositories {
  healthRepository: HealthRepository;
  authRepository: AuthRepository;
  profileRepository: ProfileRepository;
  gameStatRepository: GameStatRepository;
}

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

export {
  type HealthRepository,
  type AuthRepository,
  type ProfileRepository,
  type GameStatRepository,
};
