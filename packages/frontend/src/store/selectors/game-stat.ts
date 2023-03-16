import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store/reducers';

const botStat = (state: RootState) => state.gameStat.botState;
const loading = (state: RootState) => state.gameStat.loading;

export const statLoading = createSelector(loading, (loading) => loading);
export const botGameStat = createSelector(botStat, (botStat) => botStat);
