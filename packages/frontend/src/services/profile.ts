import { http } from '@helpers';
import type {
  IUpdateNickname,
  IUpdateEmail,
  IUpdatePassword,
  IEmailVerification,
  IResponseUpdNickname,
  IResponseUpdEmail,
  IResponseProfile,
} from '@tic-tac-toe/shared';
import { ApiRoutes, ProfileSubRoutes } from '@tic-tac-toe/shared';
import type { IEmptyResult } from '@interfaces';

export const getProfile = (): Promise<IResponseProfile> =>
  http.get({
    url: `${ApiRoutes.PROFILE}${ProfileSubRoutes.USER_PROFILE}`,
    headers: {
      needAuth: true,
    },
  });

export const updateNickname = (
  data: IUpdateNickname,
): Promise<IResponseUpdNickname> =>
  http.put({
    url: `${ApiRoutes.PROFILE}${ProfileSubRoutes.UPDATE_NICKNAME}`,
    body: { ...data },
    headers: {
      needAuth: true,
    },
  });

export const updateEmail = (data: IUpdateEmail): Promise<IResponseUpdEmail> =>
  http.put({
    url: `${ApiRoutes.PROFILE}${ProfileSubRoutes.UPDATE_EMAIL}`,
    body: { ...data },
    headers: {
      needAuth: true,
    },
  });

export const verifyEmail = (
  data: IEmailVerification,
): Promise<IResponseUpdEmail> =>
  http.put({
    url: `${ApiRoutes.PROFILE}${ProfileSubRoutes.EMAIL_VERIFICATION}`,
    body: { ...data },
    headers: {
      needAuth: true,
    },
  });

export const updatePassword = (data: IUpdatePassword): Promise<IEmptyResult> =>
  http.put({
    url: `${ApiRoutes.PROFILE}${ProfileSubRoutes.UPDATE_PASSWORD}`,
    body: { ...data },
    headers: {
      needAuth: true,
    },
  });
