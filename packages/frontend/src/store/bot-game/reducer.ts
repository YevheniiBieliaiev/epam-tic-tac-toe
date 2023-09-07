import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { OpponentSymbol } from '@tic-tac-toe/shared';
import type { Levels, GameResult } from '@types';
import type { BotGameState } from '@interfaces';
import { botTurn } from './actions';

const initialState: BotGameState = {
  level: 'easy',
  userSymbol: 'X',
  turn: true,
  botSymbol: null,
  disabled: false,
  buttons: Array(9).fill(''),
  winner: null,
};

const botGameSlice = createSlice({
  name: 'botGame',
  initialState,
  reducers: {
    setTurn(state, action: PayloadAction<{ turn: boolean }>) {
      state.turn = action.payload.turn;
    },
    setLevel(state, action: PayloadAction<Levels>) {
      state.level = action.payload;
    },
    setSymbol(state, action: PayloadAction<OpponentSymbol>) {
      state.userSymbol = action.payload;
      action.payload === 'O' ? (state.turn = false) : (state.turn = true);
    },
    startGame(state) {
      state.disabled = true;
      state.botSymbol = state.userSymbol === 'X' ? 'O' : 'X';
    },
    stopGame(state) {
      state.disabled = false;
      state.buttons = Array(9).fill('');
      state.winner = null;
      state.turn = state.userSymbol === 'X';
    },
    restartGame(state) {
      state.buttons = Array(9).fill('');
      state.winner = null;
      state.turn = state.userSymbol === 'X';
    },
    setWinner(state, action: PayloadAction<GameResult>) {
      state.winner = action.payload;
    },
    addSymbol(state, action: PayloadAction<{ idx: number }>) {
      const { idx } = action.payload;
      const btns = [...state.buttons];
      btns.splice(idx, 1, state.userSymbol);
      state.buttons = btns;
      state.turn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(botTurn.fulfilled, (state, action) => {
      const { userTurn, buttons } = action.payload;
      state.turn = userTurn;
      state.buttons = [...buttons];
    });
  },
});

export const botGameReducer = botGameSlice.reducer;

export const {
  setTurn,
  setLevel,
  setSymbol,
  startGame,
  stopGame,
  addSymbol,
  setWinner,
  restartGame,
} = botGameSlice.actions;
