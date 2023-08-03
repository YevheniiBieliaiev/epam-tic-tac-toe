import { PageTitle, Container } from '@primitives';
import { PageTitles } from '@enums';
import { enLocal } from '@locals';
import * as styles from './styles';

export const EmailInstruction = () => (
  <PageTitle title={PageTitles.EMAIL_INSTRUCTION}>
    <Container type="centered" cssExtention={styles.infoWrapper}>
      <div css={styles.header}>
        <span>{enLocal.common.emailInstruction.header}</span>
      </div>

      <div css={styles.instruction}>
        <span>{enLocal.common.emailInstruction.instruction}</span>
      </div>
    </Container>
  </PageTitle>
);
