import { useEffect } from 'react';
import { GameCells } from '@primitives';
import { addSymbol, botTurn } from '@store';
import { gameState } from '@selectors';
import { useAppSelector, useAppDispatch } from '@hooks';
import { Restart } from './restart';
import { checkWin } from './utils';
import * as styles from './styles';

export const Board = () => {
  const dispatch = useAppDispatch();

  const { buttons, disabled, winner, turn } = useAppSelector(gameState);

  useEffect(() => {
    checkWin({ buttons });
  }, [buttons]);

  const onTurnHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const idx = +event.currentTarget.id.match(/\d+/)[0];
    if (buttons[idx] || winner || !disabled || !turn) return;

    dispatch(addSymbol({ idx }));
    dispatch(botTurn());
  };

  return (
    <div css={styles.board}>
      {winner && <Restart winner={winner} />}
      <GameCells buttons={buttons} onClick={onTurnHandler} />
    </div>
  );
};
