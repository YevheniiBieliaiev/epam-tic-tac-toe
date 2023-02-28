import { createAsyncThunk } from '@reduxjs/toolkit';
import type { NavigateFunction } from 'react-router-dom';
import type {
  ICandidate,
  ISignIn,
  ISendEmail,
  IResetPassword,
  IConfirmEmail,
  HttpError,
} from '@tic-tac-toe/shared';
import { HttpStatusCode } from '@tic-tac-toe/shared';
import {
  signUp,
  signIn,
  signOut,
  confirmEmail,
  resetPasswordEmail,
  resetPassword,
  updateTokens,
} from '@services';
import { addToast, openModal } from '@store';
import { enLocal } from '@locals';
import { ClientRoutes } from '@enums';
import { AUTH_TYPES } from './action-types';

export const userSignup = createAsyncThunk(
  AUTH_TYPES.SIGNUP,
  (
    { data, navigate }: { data: ICandidate; navigate: NavigateFunction },
    { rejectWithValue, dispatch },
  ) =>
    signUp(data)
      .then((response) => {
        navigate(ClientRoutes.CONFIRM_EMAIL, { state: data.email });

        return response;
      })
      .catch((e: HttpError) => {
        dispatch(addToast({ level: 'error', description: e.message }));

        return rejectWithValue(e.message);
      }),
);

export const userSignin = createAsyncThunk(
  AUTH_TYPES.SIGNIN,
  (
    { data, navigate }: { data: ISignIn; navigate: NavigateFunction },
    { rejectWithValue, dispatch },
  ) =>
    signIn(data)
      .then((response) => {
        navigate(ClientRoutes.HOME);

        return response;
      })
      .catch((e: HttpError) => {
        dispatch(addToast({ level: 'error', description: e.message }));

        return rejectWithValue(e.message);
      }),
);

export const userSignout = createAsyncThunk(
  AUTH_TYPES.SIGNOUT,
  (_data, { rejectWithValue, dispatch }) =>
    signOut()
      .then(() => AUTH_TYPES.SIGNOUT)
      .catch((e: HttpError) => {
        dispatch(addToast({ level: 'error', description: e.message }));

        return rejectWithValue(e.message);
      }),
);

export const proveEmail = createAsyncThunk(
  AUTH_TYPES.PROVE_EMAIL,
  (data: IConfirmEmail, { rejectWithValue, dispatch }) =>
    confirmEmail(data)
      .then(() => {
        dispatch(openModal('accountConfirmationModal'));
      })
      .catch((e: HttpError) => {
        dispatch(addToast({ level: 'error', description: e.message }));

        return rejectWithValue(e.message);
      }),
);

export const changePaswordEmail = createAsyncThunk(
  AUTH_TYPES.RESET_PASSWORD_EMAIL,
  (data: ISendEmail, { rejectWithValue, dispatch }) =>
    resetPasswordEmail(data)
      .then(() => {
        dispatch(openModal('emailPasswordModal'));
      })
      .catch((e: HttpError) => {
        dispatch(addToast({ level: 'error', description: e.message }));

        return rejectWithValue(e.message);
      }),
);

export const changePassword = createAsyncThunk(
  AUTH_TYPES.RESET_PASSWORD,
  (
    {
      data,
      token,
      navigate,
    }: { data: IResetPassword; token: string; navigate: NavigateFunction },
    { rejectWithValue, dispatch },
  ) =>
    resetPassword(data, token)
      .then((response) => {
        dispatch(
          addToast({
            level: 'success',
            description: enLocal.toast.resetPassword,
          }),
        );

        navigate(ClientRoutes.HOME);

        return response;
      })
      .catch((e: HttpError) => {
        dispatch(addToast({ level: 'error', description: e.message }));

        return rejectWithValue(e.message);
      }),
);

export const authTokens = createAsyncThunk(
  AUTH_TYPES.UPDATE_TOKENS,
  (_data, { rejectWithValue, dispatch }) =>
    updateTokens()
      .then((response) => response)
      .catch((e: HttpError) => {
        if (e.status === HttpStatusCode.INTERNAL_SERVER_ERROR) {
          dispatch(addToast({ level: 'error', description: e.message }));
        }

        return rejectWithValue(e.message);
      }),
);
