import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IGameBotStat, IGameUserStat } from '@tic-tac-toe/shared';
import type { TResultKey } from '@types';
import { gameBotStat, updGameBotStat } from './actions';

interface GamestatState {
  botState: IGameBotStat;
  userStat: IGameUserStat;
  loading: boolean;
  saveLoading: boolean;
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
  saveLoading: false,
};

const gameStatSlice = createSlice({
  name: 'gamestat',
  initialState,
  reducers: {
    setBotScore(state, action: PayloadAction<TResultKey>) {
      state.botState[action.payload] = state.botState[action.payload] + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(gameBotStat.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      gameBotStat.fulfilled,
      (state, action: PayloadAction<IGameBotStat>) => {
        const { won, draw, robotWon } = action.payload;
        state.botState.won = won;
        state.botState.draw = draw;
        state.botState.robotWon = robotWon;

        state.loading = false;
      },
    );
    builder.addCase(gameBotStat.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(updGameBotStat.pending, (state) => {
      state.saveLoading = true;
    });
    builder.addCase(
      updGameBotStat.fulfilled,
      (state, action: PayloadAction<IGameBotStat>) => {
        state.botState = { ...action.payload };
        state.saveLoading = false;
      },
    );
    builder.addCase(updGameBotStat.rejected, (state) => {
      state.saveLoading = false;
    });
  },
});

export const gameStatReducer = gameStatSlice.reducer;

export const { setBotScore } = gameStatSlice.actions;
