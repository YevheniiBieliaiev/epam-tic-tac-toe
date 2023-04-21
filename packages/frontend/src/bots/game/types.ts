import type { Levels, ChosenSymbol } from '@types';
import type { ModeResult } from '@interfaces';

export interface ModeProps {
  buttons: ChosenSymbol[];
  botSymbol: 'X' | 'O';
}

export interface CombineModes {
  easy(args: ModeProps): ModeResult;
  medium(args: ModeProps): ModeResult;
  hard(args: ModeProps): ModeResult;
}

export interface TurnProps {
  level: Levels;
  botSymbol: 'X' | 'O';
  buttons: ChosenSymbol[];
}
