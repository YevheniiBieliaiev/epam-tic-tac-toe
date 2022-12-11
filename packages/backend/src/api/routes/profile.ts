import type { Services } from '@services';
import type {
  ApiRoutes,
  IUpdateEmail,
  IEmailVerification,
  IUpdateNickname,
  IUpdatePassword,
  IResponseProfile,
  IResponseUpdEmail,
  IResponseUpdNickname,
  IResponseVerifyEmail,
} from '@tic-tac-toe/shared';
import { ProfileSubRoutes } from '@tic-tac-toe/shared';
import { Router } from 'express';
import { apiPath } from '@helpers';
import { requestWrapper, auth } from '@middlewares';

export const initProfileRouter = (
  { profileServices }: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();
  router.get(
    apiPath(path, ProfileSubRoutes.USER_PROFILE),
    auth,
    requestWrapper(async (req): Promise<IResponseProfile> => {
      const { userId } = req;

      return await profileServices.getProfile({ userId });
    }),
  );

  router.put(
    apiPath(path, ProfileSubRoutes.UPDATE_NICKNAME),
    auth,
    requestWrapper(async (req): Promise<IResponseUpdNickname> => {
      const { userId } = req;
      const { nickname } = <IUpdateNickname>req.body;

      const userNickname = await profileServices.updateNickname({
        userId,
        nickname,
      });

      return userNickname;
    }),
  );

  router.put(
    apiPath(path, ProfileSubRoutes.UPDATE_EMAIL),
    auth,
    requestWrapper(async (req): Promise<IResponseUpdEmail> => {
      const { userId } = req;
      const { email } = <IUpdateEmail>req.body;

      const updatedData = await profileServices.updateEmail({
        userId,
        email,
      });

      return updatedData;
    }),
  );

  router.put(
    apiPath(path, ProfileSubRoutes.EMAIL_VERIFICATION),
    auth,
    requestWrapper(async (req): Promise<IResponseVerifyEmail> => {
      const { userId } = req;
      const { tokenEmail } = <IEmailVerification>req.body;

      const { isActivated } = await profileServices.emailVerification({
        userId,
        tokenEmail,
      });

      return {
        isActivated,
      };
    }),
  );

  router.put(
    apiPath(path, ProfileSubRoutes.UPDATE_PASSWORD),
    auth,
    requestWrapper(async (req): Promise<void> => {
      const { userId } = req;
      const { currentPassword, newPassword } = <IUpdatePassword>req.body;

      await profileServices.updatePassword({
        userId,
        currentPassword,
        newPassword,
      });

      return;
    }),
  );

  return router;
};
