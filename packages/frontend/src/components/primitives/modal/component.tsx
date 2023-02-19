import { IconButton } from '@primitives';
import type { ModalProps } from './types';
import * as styles from './styles';

export const Modal = ({ children, onClose }: ModalProps) => (
  <div css={styles.modal}>
    <div css={styles.modalInner}>
      <IconButton
        icon="xClose"
        cssExtension={styles.modalClose}
        onClick={onClose}
      />
      {children}
    </div>
  </div>
);
