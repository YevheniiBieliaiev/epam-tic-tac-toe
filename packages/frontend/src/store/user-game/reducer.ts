import { createReducer } from '@reduxjs/toolkit';
import type { UserGameState } from '@interfaces';
import { opponentData } from './actions';

const initialState: UserGameState = {
  opponent: null,
  usersBoard: Array(9).fill(''),
};

export const userGameReducer = createReducer(initialState, (builder) => {
  builder.addCase(opponentData, (state, action) => {
    state.opponent = { ...state.opponent, ...action.payload };
  });
});
