import type { InitServices } from '@services';
import type { Router } from 'express';
import { ApiRoutes } from '@tic-tac-toe/shared';
import { initHealthRoutes } from './health';
import { initAuthRouter } from './auth';
import { initProfileRouter } from './profile';
import { initGameStatRouter } from './game-stat';

export const initRoutes = ({
  services,
}: {
  services: InitServices;
}): Router[] => [
  initHealthRoutes(services, ApiRoutes.HEALTH),
  initAuthRouter(services, ApiRoutes.USER),
  initProfileRouter(services, ApiRoutes.PROFILE),
  initGameStatRouter(services, ApiRoutes.GAME_STAT),
];
