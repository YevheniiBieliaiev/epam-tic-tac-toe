import type { Request, Response, NextFunction } from 'express';
import { logger } from '@helpers';
import { HttpStatusCode, HttpError } from '@tic-tac-toe/shared';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): Response<any, Record<string, any>> => {
  if (!err) {
    next();
  }

  if (err instanceof HttpError) {
    const { url, method } = req;

    const errorResponse = {
      path: url,
      method: method,
      statusCode: err.status,
      message: err.message,
    };

    logger.error(errorResponse);

    return res.status(err.status).json({ error: err.message });
  }

  logger.error(err.message);

  return res
    .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
    .json({ error: 'internal...' });
};
