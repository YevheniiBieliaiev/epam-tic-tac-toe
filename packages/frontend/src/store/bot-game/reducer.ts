import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Levels, ChosenSymbol } from '@types';

interface BotGameState {
  level: Levels;
  symbol: ChosenSymbol;
  disabled: boolean;
  buttons: string[];
}

const initialState: BotGameState = {
  level: 'easy',
  symbol: 'X',
  disabled: false,
  buttons: Array(9).fill(''),
};

const botGameSlice = createSlice({
  name: 'botGame',
  initialState,
  reducers: {
    setLevel(state, action: PayloadAction<Levels>) {
      state.level = action.payload;
    },
    setSymbol(state, action: PayloadAction<ChosenSymbol>) {
      state.symbol = action.payload;
    },
    disabledOption(state) {
      state.disabled = true;
    },
    resetOptions(state) {
      state.level = 'easy';
      state.symbol = 'X';
      state.disabled = false;
      state.buttons = Array(9).fill('');
    },
  },
});

export const botGameReducer = botGameSlice.reducer;

export const { setLevel, setSymbol, disabledOption, resetOptions } =
  botGameSlice.actions;
