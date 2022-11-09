import type { HealthRepository } from '@repositories';

import type { HealthService } from '@services';

export interface InitRepositories {
  healthRepository: HealthRepository;
}

export interface InitServices {
  healthService: HealthService;
}
