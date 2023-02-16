import { forwardRef } from 'react';
import { enLocal } from '@locals';
import type { PasswordTipsProps } from './types';
import * as styles from './styles';

const Tips = (
  { result }: PasswordTipsProps,
  ref: React.MutableRefObject<boolean>,
) => {
  const { lowerCase, upperCase, symbols, minLength } = result;

  return (
    <div css={styles.tipWrapper}>
      <div css={styles.column}>
        <span css={styles.tip} data-result={ref.current && lowerCase}>
          {enLocal.forms.signup.passwordTips.lowerCase}
        </span>

        <span css={styles.tip} data-result={ref.current && upperCase}>
          {enLocal.forms.signup.passwordTips.upperCase}
        </span>
      </div>

      <div css={styles.column}>
        <span css={styles.tip} data-result={ref.current && symbols}>
          {enLocal.forms.signup.passwordTips.symbol}
        </span>

        <span css={styles.tip} data-result={ref.current && minLength}>
          {enLocal.forms.signup.passwordTips.minChars}
        </span>
      </div>
    </div>
  );
};

export const PasswordTips = forwardRef(Tips);
