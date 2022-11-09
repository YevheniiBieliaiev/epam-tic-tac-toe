import type { Services } from '@services';
import type { Router } from 'express';
import { ApiRoutes } from '@tic-tac-toe/shared';
import { initHealthRoutes } from './health';

export const initRoutes = ({ services }: { services: Services }): Router[] => [
  initHealthRoutes(services, ApiRoutes.HEALTH),
];
