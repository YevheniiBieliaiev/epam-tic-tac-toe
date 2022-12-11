import type { Repositories } from '@repositories';
import type { InitServices } from '@interfaces';
import { HealthService } from './health';
import { AuthServices } from './auth';
import { ProfileServices } from './profile';
import { S3StorageService } from './s3-storage';
import { HashService } from './hash';
import { JWTService } from './jwt';
import { EmailService } from './email';

export const initServices = ({
  repositories,
}: {
  repositories: Repositories;
}): InitServices => {
  const s3StorageService = new S3StorageService();
  const hashService = new HashService({
    authRepository: repositories.authRepository,
  });
  const jwtService = new JWTService({
    authRepository: repositories.authRepository,
  });
  const emailService = new EmailService();

  return {
    healthService: new HealthService({
      healthRepository: repositories.healthRepository,
    }),

    authService: new AuthServices({
      authRepository: repositories.authRepository,
      hashService,
      jwtService,
      emailService,
    }),

    profileServices: new ProfileServices({
      authRepository: repositories.authRepository,
      profileRepository: repositories.profileRepository,
      hashService,
      storageService: s3StorageService,
      emailService,
    }),
  };
};

export type Services = ReturnType<typeof initServices>;

export {
  type HealthService,
  type S3StorageService,
  type ProfileServices,
  type HashService,
  type AuthServices,
  type JWTService,
  type EmailService,
};
