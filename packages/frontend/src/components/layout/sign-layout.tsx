import { useLocation } from 'react-router-dom';
import { InternalLink, SignLink } from '@primitives';
import { ClientRoutes } from '@enums';
import { enLocal } from '@locals';
import { useAppSelector } from '@hooks';
import { userAccessToken } from '@selectors';
import type { SignLayoutProps } from './types';
import { defineLocation } from './utils';
import * as styles from './styles';

export const SignLayout = ({ children }: SignLayoutProps) => {
  const location = defineLocation(useLocation());
  const accessToken = useAppSelector(userAccessToken);

  return (
    <div css={styles.sign}>
      {!accessToken && (
        <div css={styles.linksGroup}>
          <div css={styles.tab} data-location={location.signup && 'inactive'}>
            <div css={styles.tabInner}>
              <InternalLink
                path={ClientRoutes.SIGNIN}
                label={enLocal.common.clientLinks.signSubroutes.signin}
                isInactive={location.signup}
              />
            </div>
          </div>

          <div
            css={styles.tab}
            data-location={
              (location.signin || location.resetEmail) && 'inactive'
            }
          >
            <div css={styles.tabInner}>
              <InternalLink
                path={ClientRoutes.SIGNUP}
                label={enLocal.common.clientLinks.signSubroutes.signup}
                isInactive={location.signin || location.resetEmail}
              />
            </div>
          </div>
        </div>
      )}

      {children}

      {location.signin ? (
        <SignLink
          label={enLocal.forms.signin.userSignup.label}
          path={ClientRoutes.SIGNUP}
          linkLabel={enLocal.forms.signin.userSignup.link}
        />
      ) : location.signup ? (
        <SignLink
          label={enLocal.forms.signup.userSignin.label}
          path={ClientRoutes.SIGNIN}
          linkLabel={enLocal.forms.signup.userSignin.link}
        />
      ) : null}

      {location.signin && (
        <SignLink
          label={enLocal.forms.signin.userConfirm.label}
          path={ClientRoutes.CONFIRM_EMAIL}
          linkLabel={enLocal.forms.signin.userConfirm.link}
        />
      )}
    </div>
  );
};
