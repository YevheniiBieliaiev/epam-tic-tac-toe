import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import type { InputGroupProps } from './types';
import { nextFocus, concatToken } from './utils';
import * as styles from './styles';

export const InputGroup = ({
  size,
  placeholderSymbol = 'X',
  label,
  keyValue,
  ...props
}: InputGroupProps) => {
  const [segments, setSegments] = useState<string[]>(Array(size).fill(''));

  const [inputs, setInputs] = useState<NodeListOf<HTMLInputElement>>(
    document.querySelectorAll('#codeInputs input'),
  );

  const [focus, setFocus] = useState<boolean>(false);

  const {
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    concatToken({ segments, setValue, clearErrors, keyValue, size });
  }, [segments, setValue, keyValue, clearErrors, size]);

  useEffect(() => {
    const inputs: NodeListOf<HTMLInputElement> =
      document.querySelectorAll('#codeInputs input');
    setInputs(inputs);
  }, []);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const idx = +event.currentTarget.name;

    setSegments([
      ...segments.slice(0, idx),
      event.currentTarget.value,
      ...segments.slice(idx + 1),
    ]);

    nextFocus(inputs);
  };

  const onFocusHandler = () => {
    setFocus(true);
  };

  const onBlurHandler = () => {
    setFocus(false);
  };

  const onPasteHandler = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    const token = event.clipboardData.getData('text');

    if (token.length && focus) {
      setSegments(token.split('').slice(0, segments.length));
    }
  };

  return (
    <div css={styles.group}>
      {label && (
        <span
          css={styles.label}
          data-error={errors[keyValue]?.message && 'error'}
        >
          {label}
        </span>
      )}
      <div id="codeInputs" css={styles.inputs}>
        {segments.map((it, idx) => (
          <input
            key={'regCode' + idx}
            css={styles.input}
            value={it}
            name={idx.toString()}
            type="text"
            placeholder={placeholderSymbol}
            maxLength={1}
            autoComplete="off"
            onChange={onChangeHandler}
            onPaste={onPasteHandler}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            data-error={errors[keyValue]?.message && 'error'}
            {...props}
          />
        ))}
      </div>
      {errors[keyValue]?.message && (
        <span css={styles.error}>{errors[keyValue]?.message as string}</span>
      )}
    </div>
  );
};
