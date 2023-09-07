import { GameCells } from '@primitives';
import { useAppSelector } from '@hooks';
import { usersBoard } from '@selectors';
import * as styles from './styles';

export const Board = () => {
  const buttons = useAppSelector(usersBoard);

  const onTurnHandler = () => {
    console.log('user turn');
  };

  return (
    <div css={styles.board}>
      <GameCells buttons={buttons} onClick={onTurnHandler} />
    </div>
  );
};
