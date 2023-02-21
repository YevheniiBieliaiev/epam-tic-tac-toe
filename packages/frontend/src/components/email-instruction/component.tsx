import { Container } from '@components/primitives';
import { enLocal } from '@locals';
import * as styles from './styles';

export const EmailInstruction = () => (
  <Container type="centered" cssExtention={styles.infoWrapper}>
    <div css={styles.header}>
      <span>{enLocal.common.emailInstruction.header}</span>
    </div>

    <div css={styles.instruction}>
      <span>{enLocal.common.emailInstruction.instruction}</span>
    </div>
  </Container>
);
