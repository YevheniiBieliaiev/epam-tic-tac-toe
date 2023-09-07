import { Avatar } from '@primitives';
import { enLocal } from '@locals';
import type { OpponentProps } from './types';
import * as styles from './styles';

export const OpponentInfo = ({ avatar, nickname, type }: OpponentProps) => {
  const isOwn = type === 'own';

  return (
    <div css={styles.user}>
      <div css={styles.wrapper}>
        <div css={styles.info}>
          <Avatar nickname={nickname} src={avatar} size="md" />
          <div css={styles.textInfo}>
            <div>
              <span>
                {nickname} {isOwn && enLocal.playBoard.users.info.isOwnNick}
              </span>
            </div>
            <div style={{ color: 'red' }}>
              <span>Position</span>
            </div>
            <div style={{ color: 'red' }}>
              <span>Symbol X</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
