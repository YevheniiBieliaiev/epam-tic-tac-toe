import type { Response, Request, NextFunction } from 'express';
import { logger } from '@helpers';

export const loggerHandler = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  const headers = req.headers ?? {};
  const body = req.body ?? {};
  const query = req.query ?? {};
  const { path, method } = req;

  logger.info({
    query,
    body,
    headers,
    path,
    method,
    message: `METHOD: ${method}; PATH: ${path}`,
  });

  next();
};
