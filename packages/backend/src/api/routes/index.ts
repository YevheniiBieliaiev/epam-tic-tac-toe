import type { Services } from '@services';
import type { Router } from 'express';
import { ApiRoutes } from '@tic-tac-toe/shared';
import { initHealthRoutes } from './health';
import { initAuthRouter } from './auth';
import { initProfileRouter } from './profile';

export const initRoutes = ({ services }: { services: Services }): Router[] => [
  initHealthRoutes(services, ApiRoutes.HEALTH),
  initAuthRouter(services, ApiRoutes.USER),
  initProfileRouter(services, ApiRoutes.PROFILE),
];
