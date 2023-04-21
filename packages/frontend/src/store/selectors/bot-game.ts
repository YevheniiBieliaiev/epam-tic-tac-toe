import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store/reducers';

const level = (state: RootState) => state.botGame.level;
const symbol = (state: RootState) => state.botGame.userSymbol;
const robotSymbol = (state: RootState) => state.botGame.botSymbol;
const buttons = (state: RootState) => state.botGame.buttons;
const disabled = (state: RootState) => state.botGame.disabled;
const result = (state: RootState) => state.botGame.winner;
const turn = (state: RootState) => state.botGame.turn;

export const botLevel = createSelector(level, (level) => level);
export const userSymbol = createSelector(symbol, (symbol) => symbol);
export const symbolButtons = createSelector(buttons, (buttons) => buttons);
export const setOptions = createSelector(disabled, (disabled) => disabled);
export const gameWinner = createSelector(result, (result) => result);
export const userTurn = createSelector(turn, (turn) => turn);

export const gameState = createSelector(
  [buttons, disabled, result, turn],
  (buttons, disabled, winner, turn) => ({
    buttons,
    disabled,
    winner,
    turn,
  }),
);

export const symbols = createSelector(
  [symbol, robotSymbol],
  (userSymbol, botSymbol) => ({
    userSymbol,
    botSymbol,
  }),
);
