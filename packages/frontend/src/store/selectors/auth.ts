import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store/reducers';

const loading = (state: RootState) => state.auth.loading;
const accessToken = (state: RootState) => state.auth.accessToken;
const nickname = (state: RootState) => state.auth.nickname;
const avatar = (state: RootState) => state.auth.avatar;
const mainLoader = (state: RootState) => state.auth.appLoader;
const auth = (state: RootState) => state.auth.isAuth;
const gameUserStat = (state: RootState) => state.auth.gameUserStat;

export const authLoader = createSelector(loading, (loading) => loading);
export const userAccessToken = createSelector(
  accessToken,
  (accessToken) => accessToken,
);
export const userNickname = createSelector(nickname, (nickname) => nickname);
export const userAvatar = createSelector(avatar, (avatar) => avatar);
export const appLoader = createSelector(mainLoader, (mainLoader) => mainLoader);

export const user = createSelector(
  [nickname, avatar, gameUserStat],
  (nickname, avatar, gameUserStat) => ({
    nickname,
    avatar,
    gameUserStat,
  }),
);

export const userAuth = createSelector(auth, (auth) => auth);
