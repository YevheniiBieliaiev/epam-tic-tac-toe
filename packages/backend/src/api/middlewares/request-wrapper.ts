import type { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '@tic-tac-toe/shared';

export const requestWrapper =
  <
    P extends ParamsDictionary,
    ResBody = unknown,
    ReqBody = unknown,
    ReqQuery = Query,
  >(
    handler: (
      req?: Request<P, ResBody, ReqBody, ReqQuery>,
      res?: Response,
    ) => Promise<ResBody>,
  ) =>
  (
    req: Request<P, ResBody, ReqBody, ReqQuery>,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response<unknown, Record<string, unknown>>> =>
    handler(req, res)
      .then((result) => {
        if (!result) {
          return res.status(HttpStatusCode.OK).json({ success: true });
        }

        return res.status(HttpStatusCode.OK).json(result);
      })
      .catch(next);
