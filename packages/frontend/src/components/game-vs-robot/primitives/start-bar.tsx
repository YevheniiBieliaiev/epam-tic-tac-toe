import { Button, Spinner } from '@primitives';
import { enLocal } from '@locals';
import { useAppSelector, useAppDispatch } from '@hooks';
import {
  startGame,
  stopGame,
  botTurn,
  updGameBotStat,
  openModal,
} from '@store';
import { setOptions, saveLoading, userTurn, userAccessToken } from '@selectors';
import * as styles from './styles';

export const StartBar = () => {
  const dispatch = useAppDispatch();
  const disabled = useAppSelector(setOptions);
  const turn = useAppSelector(userTurn);
  const loading = useAppSelector(saveLoading);
  const accessToken = useAppSelector(userAccessToken);

  const onStartHandler = () => {
    dispatch(startGame());

    if (!turn) {
      dispatch(botTurn());
    }
  };

  const onStopHandler = () => {
    dispatch(stopGame());
  };

  const onSaveResult = () => {
    if (accessToken) {
      dispatch(updGameBotStat());
    } else {
      dispatch(openModal('saveScoreModal'));
    }
  };

  return (
    <>
      <Button
        cssExtension={styles.startBarButton}
        contrast="light"
        onClick={onStartHandler}
        disabled={disabled}
      >
        {enLocal.playBoard.bot.startBar.start}
      </Button>

      <Button
        cssExtension={styles.startBarButton}
        contrast="light"
        onClick={onStopHandler}
        disabled={!disabled}
      >
        {enLocal.playBoard.bot.startBar.stop}
      </Button>

      <Button
        cssExtension={styles.startBarButton}
        contrast="light"
        onClick={onSaveResult}
        disabled={loading}
      >
        <span css={styles.saveScore}>
          {loading ? (
            <Spinner contrast="primary" />
          ) : (
            enLocal.playBoard.bot.startBar.saveResult
          )}
        </span>
      </Button>
    </>
  );
};
