import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store';

const opponent = (state: RootState) => state.userGame.opponent;
const board = (state: RootState) => state.userGame.usersBoard;

export const opponentData = createSelector(opponent, (opponent) => opponent);
export const usersBoard = createSelector(board, (board) => board);
