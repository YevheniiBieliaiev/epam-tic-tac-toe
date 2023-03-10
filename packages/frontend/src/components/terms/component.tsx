import { enLocal } from '@locals';
import { ClientRoutes } from '@enums';
import {
  Container,
  PageHeading,
  SecondaryHeading,
  List,
  ButtonInternal,
} from '@primitives';
import * as styles from './styles';

export const TermsContent = () => (
  <Container cssExtention={styles.terms}>
    <ButtonInternal
      path={ClientRoutes.HOME}
      label={enLocal.common.clientLinks.toGame}
      type="dark"
      icon="arrowLeft"
      iconSize="xs"
      cssExtension={styles.linkButton}
    />

    <div css={styles.pageHeader}>
      <PageHeading>{enLocal.terms.header}</PageHeading>
    </div>

    <div css={styles.chapter}>
      <p>{enLocal.terms.preamble.p1}</p>
      <p>{enLocal.terms.preamble.p2}</p>
      <p>{enLocal.terms.preamble.p3}</p>
    </div>

    <div css={styles.chapter}>
      <div css={styles.chapterHeading}>
        <SecondaryHeading contrast="dark">
          {enLocal.terms.cookies.header}
        </SecondaryHeading>
      </div>

      <div>
        <p>{enLocal.terms.cookies.p1}</p>
        <p>{enLocal.terms.cookies.p2}</p>
      </div>
    </div>

    <div css={styles.chapter}>
      <div css={styles.chapterHeading}>
        <SecondaryHeading contrast="dark">
          {enLocal.terms.license.header}
        </SecondaryHeading>
      </div>

      <div>
        <p>{enLocal.terms.license.p1}</p>
        <p>{enLocal.terms.license.list1}</p>
        <List list={enLocal.terms.license['list1-content']} />
        <p>{enLocal.terms.license.p2}</p>
        <p>{enLocal.terms.license.p3}</p>
        <p>{enLocal.terms.license.list2}</p>
        <List list={enLocal.terms.license['list2-content']} />
        <p>{enLocal.terms.license.p4}</p>
      </div>
    </div>

    <div css={styles.chapter}>
      <div css={styles.chapterHeading}>
        <SecondaryHeading contrast="dark">
          {enLocal.terms.hyperlink.header}
        </SecondaryHeading>
      </div>

      <div>
        <p>{enLocal.terms.hyperlink.list1}</p>
        <List list={enLocal.terms.hyperlink['list1-content']} />
        <p>{enLocal.terms.hyperlink.p1}</p>
        <p>{enLocal.terms.hyperlink.list2}</p>
        <List list={enLocal.terms.hyperlink['list2-content']} />
        <p>{enLocal.terms.hyperlink.p2}</p>
        <p>{enLocal.terms.hyperlink.p3}</p>
        <p>{enLocal.terms.hyperlink.p4}</p>
        <p>{enLocal.terms.hyperlink.list3}</p>
        <List list={enLocal.terms.hyperlink['list3-content']} />
      </div>
    </div>

    <div css={styles.chapter}>
      <div css={styles.chapterHeading}>
        <SecondaryHeading contrast="dark">
          {enLocal.terms.iFrames.header}
        </SecondaryHeading>
      </div>

      <div>
        <p>{enLocal.terms.iFrames.p1}</p>
      </div>
    </div>

    <div css={styles.chapter}>
      <div css={styles.chapterHeading}>
        <SecondaryHeading contrast="dark">
          {enLocal.terms.content.header}
        </SecondaryHeading>
      </div>

      <div>
        <p>{enLocal.terms.content.p1}</p>
      </div>
    </div>

    <div css={styles.chapter}>
      <div css={styles.chapterHeading}>
        <SecondaryHeading contrast="dark">
          {enLocal.terms.rights.header}
        </SecondaryHeading>
      </div>

      <div>
        <p>{enLocal.terms.rights.p1}</p>
      </div>
    </div>

    <div css={styles.chapter}>
      <div css={styles.chapterHeading}>
        <SecondaryHeading contrast="dark">
          {enLocal.terms.removalLink.header}
        </SecondaryHeading>
      </div>

      <div>
        <p>{enLocal.terms.removalLink.p1}</p>
        <p>{enLocal.terms.removalLink.p2}</p>
      </div>
    </div>

    <div css={styles.chapter}>
      <div css={styles.chapterHeading}>
        <SecondaryHeading contrast="dark">
          {enLocal.terms.disclaimer.header}
        </SecondaryHeading>
      </div>

      <div>
        <p>{enLocal.terms.disclaimer.list1}</p>
        <List list={enLocal.terms.disclaimer['list1-content']} />
        <p>{enLocal.terms.disclaimer.p1}</p>
      </div>
    </div>

    <ButtonInternal
      path={ClientRoutes.HOME}
      label={enLocal.common.clientLinks.toGame}
      type="dark"
      icon="arrowLeft"
      iconSize="xs"
      cssExtension={styles.linkButton}
    />
  </Container>
);
