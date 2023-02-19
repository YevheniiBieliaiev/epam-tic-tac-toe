import { SVGIcon } from '@primitives';
import type { NotificationResultProps } from './types';
import * as styles from './styles';

export const NotificationIcon = ({ result }: NotificationResultProps) => (
  <div css={styles.result}>
    <SVGIcon icon={result} size="lg" cssExtension={styles.resultIcon} />
  </div>
);
