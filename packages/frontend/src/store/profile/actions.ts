import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  IUpdateNickname,
  IUpdateEmail,
  IUpdatePassword,
  IEmailVerification,
  HttpError,
} from '@tic-tac-toe/shared';
import {
  getProfile,
  updateNickname,
  updateEmail,
  verifyEmail,
  updatePassword,
} from '@services';
import { addToast, openModal, setNickname } from '@store';
import { enLocal } from '@locals';
import { PROFILE_TYPES } from './action-types';

export const getUserProfile = createAsyncThunk(
  PROFILE_TYPES.GET_PROFILE,
  (_data, { rejectWithValue, dispatch }) =>
    getProfile()
      .then((response) => response)
      .catch((e: HttpError) => {
        dispatch(addToast({ level: 'error', description: e.message }));

        return rejectWithValue(e.message);
      }),
);

export const changeNickname = createAsyncThunk(
  PROFILE_TYPES.UPDATE_NICKNAME,
  (data: IUpdateNickname, { rejectWithValue, dispatch }) =>
    updateNickname(data)
      .then((response) => {
        dispatch(
          addToast({
            level: 'success',
            description: enLocal.toast.profileUpdate.nickname,
          }),
        );

        dispatch(setNickname({ nickname: response.nickname }));
      })
      .catch((e: HttpError) => {
        dispatch(addToast({ level: 'error', description: e.message }));

        return rejectWithValue(e.message);
      }),
);

export const setNewPassword = createAsyncThunk(
  PROFILE_TYPES.UPDATE_PASSWORD,
  (data: IUpdatePassword, { rejectWithValue, dispatch }) =>
    updatePassword(data)
      .then(() => {
        dispatch(
          addToast({
            level: 'success',
            description: enLocal.toast.profileUpdate.password,
          }),
        );
      })
      .catch((e: HttpError) => {
        dispatch(addToast({ level: 'error', description: e.message }));

        return rejectWithValue(e.message);
      }),
);

export const changeEmail = createAsyncThunk(
  PROFILE_TYPES.UPDATE_EMAIL,
  (data: IUpdateEmail, { rejectWithValue, dispatch }) =>
    updateEmail(data)
      .then((response) => {
        dispatch(openModal('verifyNewEmailModal'));

        return response;
      })
      .catch((e: HttpError) => {
        dispatch(addToast({ level: 'error', description: e.message }));

        return rejectWithValue(e.message);
      }),
);

export const confirmEmail = createAsyncThunk(
  PROFILE_TYPES.VERIFY_EMAIL,
  (data: IEmailVerification, { rejectWithValue, dispatch }) =>
    verifyEmail(data)
      .then((response) => {
        dispatch(
          addToast({
            level: 'success',
            description: enLocal.toast.profileUpdate.email,
          }),
        );

        return response;
      })
      .catch((e: HttpError) => {
        dispatch(addToast({ level: 'error', description: e.message }));

        return rejectWithValue(e.message);
      }),
);
