import { createAction } from '@reduxjs/toolkit';
import type { Opponent } from '@interfaces';
import { USER_GAME } from './action-types';

export const opponentData = createAction<Opponent>(USER_GAME.OPPONENT_DATA);
