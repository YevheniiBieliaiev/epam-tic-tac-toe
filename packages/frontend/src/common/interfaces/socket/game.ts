import type { BoardSymbols } from '@tic-tac-toe/shared';

export interface Opponent {
  id?: string;
  avatar: string | null;
  nickname: string;
  gameUserStat: {
    won: number;
    draw: number;
    lose: number;
  };
}

export interface UserGameState {
  opponent: Opponent;
  usersBoard: BoardSymbols[];
}
