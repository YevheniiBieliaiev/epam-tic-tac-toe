import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IGameBotStat, IGameUserStat } from '@tic-tac-toe/shared';
import type { Result } from '@interfaces';
import { gameBotStat, updGameBotStat } from './actions';

interface GamestatState {
  botState: IGameBotStat;
  userStat: IGameUserStat;
  loading: boolean;
}

const initialState: GamestatState = {
  botState: {
    won: 0,
    draw: 0,
    robotWon: 0,
  },
  userStat: {
    won: 0,
    draw: 0,
    lose: 0,
  },
  loading: false,
};

const gameStatSlice = createSlice({
  name: 'gamestat',
  initialState,
  reducers: {
    setBotScore(state, action: PayloadAction<Result>) {
      state.botState[action.payload.result] = action.payload.score;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(gameBotStat.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      gameBotStat.fulfilled,
      (state, action: PayloadAction<IGameBotStat>) => {
        state.botState = { ...action.payload };
        state.loading = false;
      },
    );
    builder.addCase(gameBotStat.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(updGameBotStat.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      updGameBotStat.fulfilled,
      (state, action: PayloadAction<IGameBotStat>) => {
        state.botState = { ...action.payload };
        state.loading = false;
      },
    );
    builder.addCase(updGameBotStat.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const gameStatReducer = gameStatSlice.reducer;

export const { setBotScore } = gameStatSlice.actions;
