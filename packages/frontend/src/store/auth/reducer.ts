import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { GameUserStat } from '@tic-tac-toe/shared';
import {
  userSignup,
  userSignin,
  userSignout,
  proveEmail,
  changePaswordEmail,
  changePassword,
  authTokens,
} from './actions';

interface AuthState {
  accessToken: string;
  isAuth: boolean;
  avatar: string;
  nickname: string;
  loading: boolean;
  appLoader: boolean;
  error: string;
  gameUserStat: GameUserStat;
}

const initialState: AuthState = {
  accessToken: null,
  isAuth: false,
  avatar: '',
  nickname: null,
  loading: false,
  appLoader: false,
  error: null,
  gameUserStat: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<{ accessToken: string }>) {
      state.accessToken = action.payload.accessToken;
    },
    setNickname(state, action: PayloadAction<{ nickname: string }>) {
      state.nickname = action.payload.nickname;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSignup.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userSignup.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(userSignup.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(userSignin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userSignin.fulfilled, (state, action) => {
      state.loading = false;
      const { avatar, nickname, accessToken, gameUserStat } = action.payload;
      state.avatar = avatar ?? '';
      state.nickname = nickname;
      state.accessToken = accessToken;
      state.gameUserStat = gameUserStat;
      state.isAuth = true;
    });
    builder.addCase(userSignin.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(userSignout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userSignout.fulfilled, (state) => {
      state.loading = false;
      state.accessToken = null;
      state.isAuth = false;
    });
    builder.addCase(userSignout.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(proveEmail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(proveEmail.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(proveEmail.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(changePaswordEmail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changePaswordEmail.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(changePaswordEmail.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(changePassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.loading = false;
      const { avatar, nickname, accessToken, gameUserStat } = action.payload;
      state.avatar = avatar;
      state.nickname = nickname;
      state.accessToken = accessToken;
      state.gameUserStat = gameUserStat;
      state.isAuth = true;
    });
    builder.addCase(changePassword.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(authTokens.pending, (state) => {
      state.appLoader = true;
    });
    builder.addCase(authTokens.fulfilled, (state, action) => {
      const { avatar, nickname, gameUserStat } = action.payload;
      state.avatar = avatar;
      state.nickname = nickname;
      state.appLoader = false;
      state.gameUserStat = gameUserStat;
      state.isAuth = true;
    });
    builder.addCase(authTokens.rejected, (state) => {
      state.appLoader = false;
      state.isAuth = false;
    });
  },
});

export const authReducer = authSlice.reducer;

export const { setAccessToken, setNickname } = authSlice.actions;
