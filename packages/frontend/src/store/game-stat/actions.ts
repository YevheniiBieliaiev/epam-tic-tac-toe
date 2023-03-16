import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IGameBotStat, HttpError } from '@tic-tac-toe/shared';
import { getBotStat, updateBotStat } from '@services';
import { addToast } from '@store';
import { enLocal } from '@locals';
import { GAMESTAT_TYPES } from './action-types';

export const gameBotStat = createAsyncThunk(
  GAMESTAT_TYPES.GET_BOT_STAT,
  (_data, { rejectWithValue, dispatch }) =>
    getBotStat()
      .then((response) => response)
      .catch((e: HttpError) => {
        dispatch(addToast({ level: 'error', description: e.message }));

        return rejectWithValue(e.message);
      }),
);

export const updGameBotStat = createAsyncThunk(
  GAMESTAT_TYPES.UPDATE_BOT_STAT,
  (data: IGameBotStat, { rejectWithValue, dispatch }) =>
    updateBotStat(data)
      .then((response) => {
        dispatch(
          addToast({
            level: 'success',
            description: enLocal.toast.gamestat.scoreSaved,
          }),
        );

        return response;
      })
      .catch((e: HttpError) => {
        dispatch(addToast({ level: 'error', description: e.message }));

        return rejectWithValue(e.message);
      }),
);
