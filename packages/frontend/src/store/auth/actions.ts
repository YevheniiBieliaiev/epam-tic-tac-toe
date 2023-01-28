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
} from '@services';
import { AUTH_TYPES } from './action-types';

export const userSignup = createAsyncThunk(
  AUTH_TYPES.SIGNUP,
  (data: ICandidate, { rejectWithValue }) =>
    signUp(data)
      .then((response) => response)
      .catch((e: HttpError) => rejectWithValue(e.message)),
);

export const userSignin = createAsyncThunk(
  AUTH_TYPES.SIGNIN,
  (data: ISignIn, { rejectWithValue }) =>
    signIn(data)
      .then((response) => response)
      .catch((e: HttpError) => rejectWithValue(e.message)),
);

export const userSignout = createAsyncThunk(
  AUTH_TYPES.SIGNOUT,
  (_data, { rejectWithValue }) =>
    signOut()
      .then((response) => response)
      .catch((e: HttpError) => rejectWithValue(e.message)),
);

export const proveEmail = createAsyncThunk(
  AUTH_TYPES.PROVE_EMAIL,
  (data: IConfirmEmail, { rejectWithValue }) =>
    confirmEmail(data)
      .then((response) => response)
      .catch((e: HttpError) => rejectWithValue(e.message)),
);

export const changePaswordEmail = createAsyncThunk(
  AUTH_TYPES.RESET_PASSWORD_EMAIL,
  (data: ISendEmail, { rejectWithValue }) =>
    resetPasswordEmail(data)
      .then((response) => response)
      .catch((e: HttpError) => rejectWithValue(e.message)),
);

export const changePassword = createAsyncThunk(
  AUTH_TYPES.RESET_PASSWORD,
  (
    { data, token }: { data: IResetPassword; token: string },
    { rejectWithValue },
  ) =>
    resetPassword(data, token)
      .then((response) => response)
      .catch((e: HttpError) => rejectWithValue(e.message)),
);
