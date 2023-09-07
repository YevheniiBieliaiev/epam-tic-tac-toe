import { UserGameStatistic, OpponentInfo } from '@primitives';
import type { UserInfoProps, InfoDraftProps } from './types';
import * as styles from './styles';

export const UserInfo = ({ opponent, type }: UserInfoProps) => {
  const {
    avatar,
    nickname,
    gameUserStat: { won, lose, draw },
  } = opponent;

  return (
    <div css={styles.userInfo} data-opponent={type}>
      <OpponentInfo avatar={avatar} nickname={nickname} type={type} />
      <UserGameStatistic won={won} lose={lose} draw={draw} type={type} />
    </div>
  );
};

export const InfoDraft = ({ type }: InfoDraftProps) => (
  <div css={styles.userInfo} data-opponent={type}></div>
);
