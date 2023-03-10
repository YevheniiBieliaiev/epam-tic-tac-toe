import { ButtonInternal, List } from '@primitives';
import { ClientRoutes } from '@enums';
import { enLocal } from '@locals';
import type { BoardLayoutProps } from './types';
import * as styles from './styles';

export const BoardLayout = ({ children }: BoardLayoutProps) => (
  <div css={styles.boardLayout}>
    {children}

    <div css={styles.communication}>
      <div css={styles.communicationInner}>
        <div css={styles.action}>
          <span css={styles.actionHeader}>
            {enLocal.common.confirmError.header}
          </span>
          <span css={styles.actionMotion}>
            {enLocal.common.confirmError.motion}
          </span>
          <ButtonInternal
            path={ClientRoutes.CONTACT_US}
            label={enLocal.common.confirmError.linkButton}
            type="light"
            txtSize="sm"
            cssExtension={styles.linkButton}
          />
        </div>
      </div>
    </div>

    <div css={styles.rules}>
      <div css={styles.rulesHeader}>
        <h2>{enLocal.home.rulesHeader}</h2>
      </div>

      <div>
        <p>{enLocal.home.rulesDescription.p1}</p>
        <p>{enLocal.home.rulesDescription.p2}</p>
      </div>

      <div>
        <span>{enLocal.home.rules.header}</span>
        <List list={enLocal.home.rules.rulesList} isOrdered={true} />
      </div>
    </div>
  </div>
);
