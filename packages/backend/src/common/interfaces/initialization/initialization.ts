import type {
  HealthRepository,
  AuthRepository,
  ProfileRepository,
  GameStatRepository,
} from '@repositories';

import type {
  HealthService,
  AuthServices,
  ProfileServices,
  GameStatServices,
} from '@services';

export interface InitRepositories {
  healthRepository: HealthRepository;
  authRepository: AuthRepository;
  profileRepository: ProfileRepository;
  gameStatRepository: GameStatRepository;
}

export interface InitServices {
  healthService: HealthService;
  authService: AuthServices;
  profileServices: ProfileServices;
  gameStatServices: GameStatServices;
}
