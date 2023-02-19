import { InternalLink } from '@primitives';
import { NotificationIcon } from './notification-icon';
import type { ModalConfirmProps } from './types';
import * as styles from './styles';

export const ModalConfirm = ({
  result,
  textResult,
  instruction,
  linkPath,
  linkLabel,
}: ModalConfirmProps) => (
  <div css={styles.modalContent}>
    <NotificationIcon result={result} />
    <div css={styles.resultText}>
      <span>{textResult}</span>
    </div>
    <div css={styles.instruction}>
      <span>{instruction}</span>
      {linkPath && (
        <InternalLink
          path={linkPath}
          label={linkLabel}
          contrast="secondary"
          txtSize="md"
        />
      )}
    </div>
  </div>
);
