import type { Services } from '@services';
import type {
  ApiRoutes,
  ICandidate,
  IConfirmEmail,
  IResetPassword,
  ISignIn,
  ISendEmail,
  IResponseLogin,
  IResponseUpdateTokens,
} from '@tic-tac-toe/shared';
import { AuthSubRoutes, RouteIdParam, HttpError } from '@tic-tac-toe/shared';
import type { Request } from 'express';
import { Router } from 'express';
import { apiPath, getEnv } from '@helpers';
import { requestWrapper } from '@middlewares';
import type { TCookiesKeys } from '@types';
import { EmailSubjects } from '@enums';

export const initAuthRouter = (
  { authService }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.post(
    apiPath(path, AuthSubRoutes.REGISTER),
    requestWrapper(async (req: Request): Promise<void> => {
      const { email, nickname, password } = <ICandidate>req.body;

      const { tokenEmail } = await authService.createUser({
        nickname,
        email,
        password,
      });

      await authService.sendEmail(
        email,
        tokenEmail,
        'registration',
        EmailSubjects.REGISTRATION,
      );

      return;
    }),
  );

  router.post(
    apiPath(path, AuthSubRoutes.SIGN_IN),
    requestWrapper(async (req, res): Promise<IResponseLogin> => {
      const { email, password } = <ISignIn>req.body;

      const { accessToken, avatar, nickname, refreshToken } =
        await authService.signIn({ email, password });

      res.cookie(getEnv('JWT_REFRESH_TOKEN_KEY'), refreshToken, {
        httpOnly: true,
      });

      return {
        accessToken,
        avatar,
        nickname,
      };
    }),
  );

  router.post(
    apiPath(path, AuthSubRoutes.SIGN_OUT),
    requestWrapper(async (req, res): Promise<void> => {
      const { refTokETTT } = <TCookiesKeys>req.cookies;

      await authService.signOut({ refreshToken: refTokETTT });
      res.cookie(getEnv('JWT_REFRESH_TOKEN_KEY'), null);

      return;
    }),
  );

  router.post(
    apiPath(path, AuthSubRoutes.REFRESH_TOKEN),
    requestWrapper(async (req, res): Promise<IResponseUpdateTokens> => {
      const { refTokETTT } = <TCookiesKeys>req.cookies;
      try {
        const { accessToken, refreshToken } = await authService.updateTokens({
          token: refTokETTT,
        });

        res.cookie(getEnv('JWT_REFRESH_TOKEN_KEY'), refreshToken, {
          httpOnly: true,
        });

        return {
          accessToken,
        };
      } catch (err) {
        res.cookie(getEnv('JWT_REFRESH_TOKEN_KEY'), null);

        if (err instanceof HttpError) {
          throw new HttpError({
            status: err.status,
            message: err.message,
          });
        } else {
          throw new Error();
        }
      }
    }),
  );

  router.post(
    apiPath(path, AuthSubRoutes.PASSWORD_CHANGE_EMAIL),
    requestWrapper(async (req): Promise<void> => {
      const { email } = <ISendEmail>req.body;

      const token = await authService.getEmailToken({ email });

      await authService.sendEmail(
        email,
        token,
        'reset-password',
        EmailSubjects.CHANGE_PASSWORD,
      );

      return;
    }),
  );

  router.put(
    apiPath(path, AuthSubRoutes.CONFIRM_EMAIL),
    requestWrapper(async (req): Promise<void> => {
      const { email, tokenEmail } = <IConfirmEmail>req.body;

      await authService.confirmAccount({ email, tokenEmail });

      return;
    }),
  );

  router.put(
    apiPath(path, `${AuthSubRoutes.PASSWORD_CHANGE}${RouteIdParam.TOKEN}`),
    requestWrapper(async (req, res): Promise<IResponseLogin> => {
      const { token } = req.params;
      const { password } = <IResetPassword>req.body;

      const { avatar, nickname, accessToken, refreshToken } =
        await authService.resetPassword({ token, password });

      res.cookie(getEnv('JWT_REFRESH_TOKEN_KEY'), refreshToken, {
        httpOnly: true,
      });

      return {
        accessToken,
        avatar,
        nickname,
      };
    }),
  );

  return router;
};
