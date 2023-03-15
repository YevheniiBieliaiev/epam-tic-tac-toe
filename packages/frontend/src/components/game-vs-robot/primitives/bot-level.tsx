import { InputRadio } from '@primitives';
import type { Levels } from '@types';
import { enLocal } from '@locals';
import { useAppSelector, useAppDispatch } from '@hooks';
import { setLevel } from '@store';
import { disabledOptions, botLevel } from '@selectors';
import * as styles from './styles';

export const BotLevel = () => {
  const dispatch = useAppDispatch();
  const level = useAppSelector(botLevel);
  const disabled = useAppSelector(disabledOptions);

  const onSetLevelHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const level = event.currentTarget.value as Levels;
    dispatch(setLevel(level));
  };

  return (
    <div css={styles.options}>
      <div css={styles.optionsInner}>
        <div css={styles.optionsHeader}>
          <span>{enLocal.playBoard.bot.level.header}</span>
        </div>

        <div css={styles.settings}>
          <InputRadio
            id="easy"
            label={enLocal.playBoard.bot.level.easy}
            name="botLevel"
            value="easy"
            checked={level === 'easy'}
            onChange={onSetLevelHandler}
            disabled={disabled}
          />
          <InputRadio
            id="medium"
            label={enLocal.playBoard.bot.level.medium}
            name="botLevel"
            value="medium"
            checked={level === 'medium'}
            onChange={onSetLevelHandler}
            disabled={disabled}
          />
          <InputRadio
            id="hard"
            label={enLocal.playBoard.bot.level.hard}
            name="botLevel"
            value="hard"
            checked={level === 'hard'}
            onChange={onSetLevelHandler}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};
