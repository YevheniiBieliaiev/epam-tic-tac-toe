import { InternalLink } from '@primitives';
import type { SignLinkProps } from './types';
import * as styles from './styles';

export const SignLink = ({ label, path, linkLabel }: SignLinkProps) => (
  <div css={styles.linkWrapper}>
    <div css={styles.label}>{label}</div>
    <div>
      <InternalLink
        path={path}
        label={linkLabel}
        contrast="secondary"
        txtSize="md"
      />
    </div>
  </div>
);
