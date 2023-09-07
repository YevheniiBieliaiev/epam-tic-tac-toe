import {
  type RoomType,
  type OpponentSymbol,
  type BoardSymbols,
} from '@tic-tac-toe/shared';

export interface Opponent {
  socketId: string;
  symbol: OpponentSymbol;
}

export interface Room {
  roomName: string;
  opponents: Opponent[];
  status: RoomType;
  board: BoardSymbols[];
}
