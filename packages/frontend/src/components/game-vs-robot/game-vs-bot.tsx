// import { useState } from 'react';
import { BoardLayout } from '@components/layout';
import { ButtonInternal, BotGameStatistic, GameCells } from '@primitives';
import { ClientRoutes } from '@enums';
// import type { ChosenSymbol } from '@types';
import { enLocal } from '@locals';
import { useAppSelector } from '@hooks';
import { symbolButtons } from '@selectors';
import { BotLevel, SetSymbol, StartBar } from './primitives';
import * as styles from './styles';

export const GameVsBot = () => {
  const buttons = useAppSelector(symbolButtons);
  // const [turn, setTurn] = useState<ChosenSymbol>('X');

  // const onStartHandler = () => {};

  const onTurnHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const idx = +event.currentTarget.id.match(/\d+/)[0];
    console.log(idx);
  };

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
            <BotGameStatistic won={0} draw={0} robotWon={0} />

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
