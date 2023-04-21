import { useEffect } from 'react';
import { BoardLayout } from '@components/layout';
import { ButtonInternal, AppSpinner, BotGameStatistic } from '@primitives';
import { ClientRoutes } from '@enums';
import { enLocal } from '@locals';
import { useAppSelector, useAppDispatch } from '@hooks';
import { closeModal, gameBotStat } from '@store';
import { statLoading, userAccessToken } from '@selectors';
import { BotLevel, SetSymbol, StartBar, Board } from './primitives';
import * as styles from './styles';

export const GameVsBot = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(statLoading);
  const accessToken = useAppSelector(userAccessToken);

  useEffect(() => {
    if (accessToken) {
      dispatch(gameBotStat());
    }

    return () => {
      dispatch(closeModal('saveScoreModal'));
    };
  }, [accessToken, dispatch]);

  if (loading) {
    return <AppSpinner />;
  }

  return (
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

        <div css={styles.game}>
          <div css={styles.infoFrame}>
            <BotGameStatistic />

            <div css={styles.optionsWrapper}>
              <BotLevel />
              <SetSymbol />
            </div>
          </div>

          <Board />

          <div css={styles.startBar}>
            <StartBar />
          </div>
        </div>
      </div>
    </BoardLayout>
  );
};
