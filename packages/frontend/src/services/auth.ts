import { http } from '@helpers';
import type {
  ICandidate,
  ISignIn,
  ISendEmail,
  IResetPassword,
  IConfirmEmail,
  IResponseLogin,
} from '@tic-tac-toe/shared';
import { ApiRoutes, AuthSubRoutes } from '@tic-tac-toe/shared';
import type { IEmptyResult } from '@interfaces';

export const signUp = (data: ICandidate): Promise<IEmptyResult> =>
  http.post({
    url: `${ApiRoutes.USER}${AuthSubRoutes.REGISTER}`,
    body: { ...data },
  });

export const signIn = (data: ISignIn): Promise<IResponseLogin> =>
  http.post({
    url: `${ApiRoutes.USER}${AuthSubRoutes.SIGN_IN}`,
    body: { ...data },
  });

export const signOut = (): Promise<IEmptyResult> =>
  http.post({ url: `${ApiRoutes.USER}${AuthSubRoutes.SIGN_OUT}`, body: {} });

export const confirmEmail = (data: IConfirmEmail): Promise<IEmptyResult> =>
  http.put({
    url: `${ApiRoutes.USER}${AuthSubRoutes.CONFIRM_EMAIL}`,
    body: { ...data },
  });

export const resetPasswordEmail = (data: ISendEmail): Promise<IEmptyResult> =>
  http.post({
    url: `${ApiRoutes.USER}${AuthSubRoutes.PASSWORD_CHANGE_EMAIL}`,
    body: { ...data },
  });

export const resetPassword = (
  data: IResetPassword,
  token: string,
): Promise<IResponseLogin> =>
  http.put({
    url: `${ApiRoutes.USER}${AuthSubRoutes.PASSWORD_CHANGE}/${token}`,
    body: { ...data },
  });

export const updateTokens = (): Promise<IResponseLogin> => http.setTokens();
