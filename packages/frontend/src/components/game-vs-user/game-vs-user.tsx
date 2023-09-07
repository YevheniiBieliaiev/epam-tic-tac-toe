import { PageTitle, ButtonInternal } from '@components/primitives';
import { BoardLayout } from '@components/layout';
// import { socketEvents } from '@socket';
import { PageTitles, ClientRoutes } from '@enums';
import { enLocal } from '@locals';
import { PlayBoard } from './primitives';
import * as styles from './styles';

export const GameVsUser = () => (
  <PageTitle title={PageTitles.USERS_GAME}>
    <BoardLayout>
      <div css={styles.gameWrapper}>
        <ButtonInternal
          path={ClientRoutes.HOME}
          label={enLocal.common.clientLinks.home}
          type="dark"
          icon="arrowLeft"
          iconSize="xs"
          cssExtension={styles.linkButton}
        />

        <PlayBoard />
      </div>
    </BoardLayout>
  </PageTitle>
);
