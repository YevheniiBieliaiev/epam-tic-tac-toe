import type {
  HealthRepository,
  AuthRepository,
  ProfileRepository,
} from '@repositories';

import type { HealthService, AuthServices, ProfileServices } from '@services';

export interface InitRepositories {
  healthRepository: HealthRepository;
  authRepository: AuthRepository;
  profileRepository: ProfileRepository;
}

export interface InitServices {
  healthService: HealthService;
  authService: AuthServices;
  profileServices: ProfileServices;
}
