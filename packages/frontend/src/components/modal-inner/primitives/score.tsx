import { ButtonInternal } from '@primitives';
import { enLocal } from '@locals';
import { ClientRoutes } from '@enums';
import * as styles from './styles';

export const TolltipSign = () => (
  <div css={styles.tipSign}>
    <div css={styles.tipInner}>
      <div css={styles.description}>
        <span css={styles.header}>
          {enLocal.playBoard.bot.tooltip.sign.header}
        </span>
        <span css={styles.text}>{enLocal.playBoard.bot.tooltip.sign.tip}</span>
      </div>

      <div css={styles.links}>
        <ButtonInternal
          path={`${ClientRoutes.SIGN}/${ClientRoutes.SIGNIN}`}
          label={enLocal.common.clientLinks.signSubroutes.signin}
          type="dark"
          txtSize="sm"
        />
        <ButtonInternal
          path={`${ClientRoutes.SIGN}/${ClientRoutes.SIGNUP}`}
          label={enLocal.common.clientLinks.signSubroutes.signup}
          type="dark"
          txtSize="sm"
        />
      </div>
    </div>
  </div>
);
