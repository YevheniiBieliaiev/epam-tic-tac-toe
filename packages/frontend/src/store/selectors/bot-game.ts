import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store/reducers';

const level = (state: RootState) => state.botGame.level;
const symbol = (state: RootState) => state.botGame.symbol;
const buttons = (state: RootState) => state.botGame.buttons;
const disabled = (state: RootState) => state.botGame.disabled;

export const botLevel = createSelector(level, (level) => level);
export const userSymbol = createSelector(symbol, (symbol) => symbol);
export const symbolButtons = createSelector(buttons, (buttons) => buttons);
export const disabledOptions = createSelector(disabled, (disabled) => disabled);
