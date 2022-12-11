import type { Request, Response, NextFunction } from 'express';
import { HttpError, HttpStatusCode } from '@tic-tac-toe/shared';
import { ErrorMessages } from '@enums';
import { getEnv } from '@helpers';
import type { IJWTUserDTO } from '@interfaces';
import jwt from 'jsonwebtoken';

export const auth = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];

    if (!accessToken) {
      throw new HttpError({
        status: HttpStatusCode.UNAUTHORIZED,
        message: ErrorMessages.UNAUTHORIZED_SESSION,
      });
    }

    const userData = <IJWTUserDTO>(
      jwt.verify(accessToken, getEnv('JWT_SECRET_ACCESS_TOKEN'))
    );

    if (!userData) {
      throw new HttpError({
        status: HttpStatusCode.UNAUTHORIZED,
        message: ErrorMessages.UNAUTHORIZED_SESSION,
      });
    }

    req.userId = userData.id;
    next();
  } catch {
    throw new HttpError({
      status: HttpStatusCode.UNAUTHORIZED,
      message: ErrorMessages.UNAUTHORIZED_SESSION,
    });
  }
};
