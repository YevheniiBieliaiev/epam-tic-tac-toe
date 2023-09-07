import { ButtonInternal } from '@primitives';
import { enLocal } from '@locals';
import { ClientRoutes } from '@enums';
import type { SignTooltipProps } from './types';
import * as styles from './styles';

export const TolltipSign = ({ header, tip }: SignTooltipProps) => (
  <div css={styles.tipSign}>
    <div css={styles.tipInner}>
      <div css={styles.description}>
        {header && <span css={styles.header}>{header}</span>}
        <span css={styles.text}>{tip}</span>
      </div>

      <div css={styles.links}>
        <ButtonInternal
          path={ClientRoutes.SIGNIN}
          label={enLocal.common.clientLinks.signSubroutes.signin}
          type="dark"
          txtSize="sm"
        />
        <ButtonInternal
          path={ClientRoutes.SIGNUP}
          label={enLocal.common.clientLinks.signSubroutes.signup}
          type="dark"
          txtSize="sm"
        />
      </div>
    </div>
  </div>
);
