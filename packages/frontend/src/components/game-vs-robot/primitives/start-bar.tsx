import { Button } from '@primitives';
import { enLocal } from '@locals';
import { useAppSelector, useAppDispatch } from '@hooks';
import { disabledOption, resetOptions } from '@store';
import { disabledOptions } from '@selectors';
import * as styles from './styles';

export const StartBar = () => {
  const dispatch = useAppDispatch();
  const disabled = useAppSelector(disabledOptions);

  const onStartHandler = () => {
    dispatch(disabledOption());
  };

  const onStopHandler = () => {
    dispatch(resetOptions());
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
    </>
  );
};
