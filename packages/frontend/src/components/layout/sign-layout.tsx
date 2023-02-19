import { useLocation } from 'react-router-dom';
import { InternalLink, SignLink } from '@primitives';
import { ClientRoutes } from '@enums';
import { enLocal } from '@locals';
import type { SignLayoutProps } from './types';
import { isSignInLocation } from './utils';
import * as styles from './styles';

export const SignLayout = ({ children }: SignLayoutProps) => {
  const isSignIn = isSignInLocation(useLocation());

  return (
    <div css={styles.sign}>
      <div css={styles.linksGroup}>
        <div css={styles.tab} data-location={!isSignIn && 'inactive'}>
          <div css={styles.tabInner}>
            <InternalLink
              path={ClientRoutes.SIGNIN}
              label={enLocal.common.clientLinks.signSubroutes.signin}
              isInactive={!isSignIn}
            />
          </div>
        </div>

        <div css={styles.tab} data-location={!!isSignIn && 'inactive'}>
          <div css={styles.tabInner}>
            <InternalLink
              path={ClientRoutes.SIGNUP}
              label={enLocal.common.clientLinks.signSubroutes.signup}
              isInactive={isSignIn}
            />
          </div>
        </div>
      </div>

      {children}

      {isSignIn ? (
        <SignLink
          label={enLocal.forms.signin.userSignup.label}
          path={ClientRoutes.SIGNUP}
          linkLabel={enLocal.forms.signin.userSignup.link}
        />
      ) : (
        <SignLink
          label={enLocal.forms.signup.userSignin.label}
          path={ClientRoutes.SIGNIN}
          linkLabel={enLocal.forms.signup.userSignin.link}
        />
      )}

      {isSignIn && (
        <SignLink
          label={enLocal.forms.signin.userConfirm.label}
          path={ClientRoutes.CONFIRM_EMAIL}
          linkLabel={enLocal.forms.signin.userConfirm.link}
        />
      )}
    </div>
  );
};
