import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IResponseUpdEmail, IResponseProfile } from '@tic-tac-toe/shared';
import { getRelativeTimeString } from '@helpers';
import { enLocal } from '@locals';
import {
  changeNickname,
  changeEmail,
  confirmEmail,
  setNewPassword,
  getUserProfile,
} from './actions';

interface ProfileState {
  isActive: boolean;
  loading: boolean;
  profileLoader: boolean;
  email: string;
  passwordUpdatedAt: string;
}

const initialState: ProfileState = {
  isActive: true,
  loading: false,
  profileLoader: false,
  email: null,
  passwordUpdatedAt: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.pending, (state) => {
      state.profileLoader = true;
    });
    builder.addCase(
      getUserProfile.fulfilled,
      (state, action: PayloadAction<IResponseProfile>) => {
        const { email, passwordUpdatedAt } = action.payload;
        state.email = email;
        state.passwordUpdatedAt = !passwordUpdatedAt
          ? ''
          : getRelativeTimeString(passwordUpdatedAt, 'en');
        state.profileLoader = false;
      },
    );
    builder.addCase(getUserProfile.rejected, (state) => {
      state.profileLoader = false;
    });

    builder.addCase(changeNickname.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changeNickname.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(changeNickname.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(changeEmail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      changeEmail.fulfilled,
      (state, action: PayloadAction<IResponseUpdEmail>) => {
        state.loading = false;
        const { email, isActivated } = action.payload;
        state.isActive = isActivated;
        state.email = email;
      },
    );
    builder.addCase(changeEmail.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(confirmEmail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      confirmEmail.fulfilled,
      (state, action: PayloadAction<IResponseUpdEmail>) => {
        state.loading = false;
        state.isActive = action.payload.isActivated;
      },
    );
    builder.addCase(confirmEmail.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(setNewPassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(setNewPassword.fulfilled, (state) => {
      state.loading = false;
      state.passwordUpdatedAt = enLocal.profile.password.defaultText.adverb;
    });
    builder.addCase(setNewPassword.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const profileReducer = profileSlice.reducer;
