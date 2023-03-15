// import { WINNING_VARIANTS } from '@tic-tac-toe/shared';
import type { SymbolsVsBot } from './types';

export const rollDice = (): SymbolsVsBot => {
  const symbols = ['X', 'O'];
  const idx = Math.floor(Math.random() * symbols.length);

  return {
    user: symbols[idx],
    bot: symbols[idx < 1 ? 1 : 0],
  };
};
