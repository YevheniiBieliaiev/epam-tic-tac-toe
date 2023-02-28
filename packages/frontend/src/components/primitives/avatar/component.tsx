import type { AvatarProps } from './types';
import * as styles from './style';

export const Avatar = ({ src, nickname, size = 'md' }: AvatarProps) => (
  <div css={styles.avatarWrapper}>
    {src ? (
      <img css={styles.avatar} src={src} alt="avatar" data-size={size} />
    ) : (
      <span css={styles.defaultAvatar} data-size={size}>
        {nickname ? nickname[0].toUpperCase() : ''}
      </span>
    )}
  </div>
);
