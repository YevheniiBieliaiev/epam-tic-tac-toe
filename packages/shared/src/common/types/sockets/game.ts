import type { EventsName } from '../../enums';

export type RoomType =
  | `${EventsName.RANDOM_OPPONENT}`
  | `${EventsName.FRIEND_OPPONENT}`;

export type OpponentSymbol = 'X' | 'O';

export type BoardSymbols = OpponentSymbol | '';
