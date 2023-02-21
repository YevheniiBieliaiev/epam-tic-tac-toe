import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  ICandidate,
  ISignIn,
  ISendEmail,
  IResetPassword,
  IConfirmEmail,
  HttpError,
} from '@tic-tac-toe/shared';
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
import { AUTH_TYPES } from './action-types';

export const userSignup = createAsyncThunk(
  AUTH_TYPES.SIGNUP,
  (data: ICandidate, { rejectWithValue, dispatch }) =>
    signUp(data)
      .then((response) => response)
      .catch((e: HttpError) => {
        dispatch(addToast({ level: 'error', description: e.message }));

        return rejectWithValue(e.message);
      }),
);

export const userSignin = createAsyncThunk(
  AUTH_TYPES.SIGNIN,
  (data: ISignIn, { rejectWithValue, dispatch }) =>
    signIn(data)
      .then((response) => response)
      .catch((e: HttpError) => {
        dispatch(addToast({ level: 'error', description: e.message }));

        return rejectWithValue(e.message);
      }),
);

export const userSignout = createAsyncThunk(
  AUTH_TYPES.SIGNOUT,
  (_data, { rejectWithValue, dispatch }) =>
    signOut()
      .then()
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
    { data, token }: { data: IResetPassword; token: string },
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

        return response;
      })
      .catch((e: HttpError) => {
        dispatch(addToast({ level: 'error', description: e.message }));

        return rejectWithValue(e.message);
      }),
);

export const authTokens = createAsyncThunk(
  AUTH_TYPES.UPDATE_TOKENS,
  (_data, { rejectWithValue }) =>
    updateTokens()
      .then((response) => response)
      .catch((e: HttpError) => rejectWithValue(e.message)),
);
