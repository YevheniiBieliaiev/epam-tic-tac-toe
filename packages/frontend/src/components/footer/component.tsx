import { ClientRoutes } from '@enums';
import { enLocal } from '@locals';
import { Container, Logo, InternalLink, ExternalLink } from '@primitives';
import * as styles from './styles';

export const Footer = () => (
  <footer css={styles.footerWrapper}>
    <Container cssExtention={styles.footerContent}>
      <div css={styles.copyrightBlock}>
        <div css={styles.logo}>
          <Logo contrast="light" />
        </div>
        <div css={styles.copyright}>
          <span>{enLocal.common.copyRight.yearAndOwner}</span>
          <span>{enLocal.common.copyRight.rights}</span>
        </div>
      </div>

      <div>
        <div css={styles.links}>
          <ExternalLink href="#" icon="facebookLogo" />
          <ExternalLink href="#" icon="instagramLogo" />
        </div>

        <InternalLink
          path={ClientRoutes.CONTACT_US}
          label={enLocal.common.clientLinks.contactUs}
          txtSize="sm"
          contrast="light"
        />
        <InternalLink
          path={ClientRoutes.TERMS}
          label={enLocal.common.clientLinks.terms}
          txtSize="sm"
          contrast="light"
        />
      </div>
    </Container>
  </footer>
);
