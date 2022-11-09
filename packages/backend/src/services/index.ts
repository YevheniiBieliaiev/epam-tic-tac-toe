import type { Repositories } from '@repositories';
import type { InitServices } from '@interfaces';
import { HealthService } from './health';

export const initServices = ({
  repositories,
}: {
  repositories: Repositories;
}): InitServices => ({
  healthService: new HealthService({
    healthRepository: repositories.healthRepository,
  }),
});

export type Services = ReturnType<typeof initServices>;

export { type HealthService };
