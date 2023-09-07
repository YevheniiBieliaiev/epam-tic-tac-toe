import type { Levels } from '@types';
import type { ModeResult } from '@interfaces';
import type { OpponentSymbol, BoardSymbols } from '@tic-tac-toe/shared';

export interface ModeProps {
  buttons: BoardSymbols[];
  botSymbol: OpponentSymbol;
}

export interface CombineModes {
  easy(args: ModeProps): ModeResult;
  medium(args: ModeProps): ModeResult;
  hard(args: ModeProps): ModeResult;
}

export interface TurnProps {
  level: Levels;
  botSymbol: OpponentSymbol;
  buttons: BoardSymbols[];
}
