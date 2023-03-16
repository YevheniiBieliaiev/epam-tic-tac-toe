import { useEffect } from 'react';
import { BoardLayout } from '@components/layout';
import {
  ButtonInternal,
  BotGameStatistic,
  GameCells,
  AppSpinner,
} from '@primitives';
import { ClientRoutes } from '@enums';
// import type { ChosenSymbol } from '@types';
import { enLocal } from '@locals';
import { useAppSelector, useAppDispatch } from '@hooks';
import { gameBotStat } from '@store';
import { symbolButtons, userAccessToken, statLoading } from '@selectors';
import { BotLevel, SetSymbol, StartBar } from './primitives';
import * as styles from './styles';

export const GameVsBot = () => {
  const dispatch = useAppDispatch();
  const buttons = useAppSelector(symbolButtons);
  const accessToken = useAppSelector(userAccessToken);
  const loading = useAppSelector(statLoading);
  // const [turn, setTurn] = useState<ChosenSymbol>('X');

  useEffect(() => {
    if (accessToken) {
      dispatch(gameBotStat());
    }
  }, [accessToken, dispatch]);

  // const onStartHandler = () => {};

  const onTurnHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const idx = +event.currentTarget.id.match(/\d+/)[0];
    console.log(idx);
  };

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

          <GameCells buttons={buttons} onClick={onTurnHandler} />

          <div css={styles.startBar}>
            <StartBar />
          </div>
        </div>
      </div>
    </BoardLayout>
  );
};
