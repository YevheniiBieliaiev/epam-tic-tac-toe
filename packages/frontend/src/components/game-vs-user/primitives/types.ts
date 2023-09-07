import type { Opponent } from '@interfaces';
import type { OpponentType } from '@types';

export interface UserInfoProps {
  opponent: Opponent;
  type: OpponentType;
}

export interface InfoDraftProps {
  type: OpponentType;
}
