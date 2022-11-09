import type { Services } from '@services';
import type { ApiRoutes } from '@tic-tac-toe/shared';
import { HttpStatusCode } from '@tic-tac-toe/shared';
import { type Response, type Request, Router } from 'express';

export function initHealthRoutes(
  { healthService }: Services,
  path: ApiRoutes,
): Router {
  const router = Router();

  router.get(path, async (req: Request, res: Response) => {
    try {
      await healthService.select();

      return res.status(HttpStatusCode.OK).send('Data base connection - OK');
    } catch (e) {
      return res
        .status(HttpStatusCode.SERVICE_UNAVAILABLE)
        .send('Data base connection error: ' + e);
    }
  });

  return router;
}
