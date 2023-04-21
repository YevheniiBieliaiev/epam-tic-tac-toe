import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ModeResult } from '@interfaces';
import { gameBot } from '@gamebots';
import type { RootState } from '@store';
import { BOTGAME_TYPES } from './action-types';

export const botTurn = createAsyncThunk(
  BOTGAME_TYPES.BOT_TURN,
  async (_data, { getState }) => {
    const updBoard = await new Promise((res) => {
      setTimeout(() => {
        const {
          botGame: { buttons, botSymbol, level, winner },
        } = <RootState>getState();

        if (!winner) {
          const botTurn = gameBot.botTurn({
            buttons,
            level,
            botSymbol,
          });

          return res(botTurn);
        }
      }, 1000);
    });

    return updBoard as ModeResult;
  },
);
