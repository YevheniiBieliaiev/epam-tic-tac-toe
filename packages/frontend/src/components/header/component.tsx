import { useAppSelector } from '@hooks';
import { ClientRoutes } from '@enums';
import { enLocal } from '@locals';
import { Container, InternalLink, Logo } from '@primitives';
import { userAccessToken } from '@selectors';
import * as styles from './styles';

export const Header = () => {
  const accessToken = useAppSelector(userAccessToken);

  return (
    <header css={styles.headerWrapper}>
      <Container cssExtention={styles.headerContent}>
        <div css={styles.links}>
          <Logo />
        </div>

        <div css={[styles.play, styles.links]}>
          <div css={styles.playLink}>
            <InternalLink
              path={ClientRoutes.GAME_ROOM}
              label={enLocal.common.clientLinks.gameRoom}
              icon="play"
            />
          </div>
          <div>
            <InternalLink
              path={ClientRoutes.LEADER_BOARD}
              label={enLocal.common.clientLinks.leaderBoard}
              icon="medal"
            />
          </div>
        </div>

        <div css={styles.auth}>
          {accessToken ? (
            <InternalLink
              path={ClientRoutes.PROFILE}
              icon="gear"
              iconSize="md"
            />
          ) : (
            <InternalLink
              path={ClientRoutes.SIGNIN}
              label={enLocal.common.clientLinks.sign}
            />
          )}
        </div>
      </Container>
    </header>
  );
};
