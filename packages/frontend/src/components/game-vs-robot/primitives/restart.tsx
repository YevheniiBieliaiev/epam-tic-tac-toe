import { Button } from '@primitives';
import { useAppDispatch, useAppSelector } from '@hooks';
import { symbols, userTurn } from '@selectors';
import { restartGame, botTurn } from '@store';
import { enLocal } from '@locals';
import type { RestartProps } from './types';
import * as styles from './styles';

export const Restart = ({ winner }: RestartProps) => {
  const dispatch = useAppDispatch();
  const { userSymbol, botSymbol } = useAppSelector(symbols);
  const turn = useAppSelector(userTurn);

  const onRestartHandler = () => {
    dispatch(restartGame());

    if (!turn) {
      dispatch(botTurn());
    }
  };

  return (
    <div css={styles.restart}>
      <div css={styles.restartInner}>
        <span>
          {winner === userSymbol
            ? enLocal.playBoard.bot.result.userWon
            : winner === botSymbol
            ? enLocal.playBoard.bot.result.botWon
            : enLocal.playBoard.bot.result.draw}
        </span>

        <Button contrast="light" onClick={onRestartHandler}>
          {enLocal.playBoard.bot.startBar.playAgain}
        </Button>
      </div>
    </div>
  );
};
