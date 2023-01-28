import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
  userSignup,
  userSignin,
  userSignout,
  proveEmail,
  changePaswordEmail,
  changePassword,
} from './actions';

interface AuthState {
  accessToken: string;
  avatar?: string;
  nickname: string;
  loading: boolean;
  error: string;
}

const initialState: AuthState = {
  accessToken: null,
  avatar: null,
  nickname: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<{ accessToken: string }>) {
      state.accessToken = action.payload.accessToken;
    },
  },
  extraReducers: (builder) => {
    //signup
    builder.addCase(userSignup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userSignup.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(userSignup.rejected, (state) => {
      state.loading = false;
    });

    //signin
    builder.addCase(userSignin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userSignin.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      const { avatar, nickname, accessToken } = action.payload;
      state.avatar = avatar;
      state.nickname = nickname;
      state.accessToken = accessToken;
    });
    builder.addCase(userSignin.rejected, (state) => {
      state.loading = false;
    });

    //userSignout
    builder.addCase(userSignout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userSignout.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(userSignout.rejected, (state) => {
      state.loading = false;
    });

    //proveEmail
    builder.addCase(proveEmail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(proveEmail.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(proveEmail.rejected, (state) => {
      state.loading = false;
    });

    //changePaswordEmail
    builder.addCase(changePaswordEmail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changePaswordEmail.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(changePaswordEmail.rejected, (state) => {
      state.loading = false;
    });

    //changePassword
    builder.addCase(changePassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changePassword.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(changePassword.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const authReducer = authSlice.reducer;

export const { setAccessToken } = authSlice.actions;
