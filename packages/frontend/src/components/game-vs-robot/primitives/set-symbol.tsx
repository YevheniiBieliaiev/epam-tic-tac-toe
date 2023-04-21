import { InputRadio } from '@primitives';
import { enLocal } from '@locals';
import { useAppSelector, useAppDispatch } from '@hooks';
import { setSymbol } from '@store';
import { setOptions, userSymbol } from '@selectors';
import type { ChosenSymbol } from '@types';
import * as styles from './styles';

export const SetSymbol = () => {
  const dispatch = useAppDispatch();
  const chosenSymbol = useAppSelector(userSymbol);
  const disabled = useAppSelector(setOptions);

  const onSetSymbolHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const symbol = event.currentTarget.value as ChosenSymbol;
    dispatch(setSymbol(symbol));
  };

  return (
    <div css={styles.options}>
      <div css={styles.optionsInner}>
        <div css={styles.optionsHeader}>
          <span>{enLocal.playBoard.bot.symbols.header}</span>
        </div>

        <div css={styles.settings}>
          <InputRadio
            id="symbolX"
            label={enLocal.playBoard.bot.symbols.x}
            name="setSymbol"
            value="X"
            checked={chosenSymbol === 'X'}
            onChange={onSetSymbolHandler}
            disabled={disabled}
          />
          <InputRadio
            id="symbolO"
            label={enLocal.playBoard.bot.symbols.o}
            name="setSymbol"
            value="O"
            checked={chosenSymbol === 'O'}
            onChange={onSetSymbolHandler}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};
