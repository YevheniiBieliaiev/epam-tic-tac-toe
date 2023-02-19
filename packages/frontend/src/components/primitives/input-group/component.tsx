import { useEffect, useState } from 'react';
import type { InputGroupProps, InputsState } from './types';
import { nextFocus, concatToken } from './utils';
import * as styles from './styles';

export const InputGroup = ({
  size,
  placeholderSymbol = 'X',
  label,
  setValue,
  clearErrors,
  keyValue,
  error,
  ...props
}: InputGroupProps) => {
  const [code, setCode] = useState<InputsState>({});
  const [inputs, setInputs] = useState<NodeListOf<HTMLInputElement>>(
    document.querySelectorAll('#codeInputs input'),
  );

  useEffect(() => {
    concatToken({ code, setValue, clearErrors, keyValue, size });
  }, [code, setValue, keyValue, clearErrors, size]);

  useEffect(() => {
    const inputs: NodeListOf<HTMLInputElement> =
      document.querySelectorAll('#codeInputs input');
    setInputs(inputs);
  }, []);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode({ ...code, [e.target.name]: e.target.value });
    nextFocus(inputs);
  };

  return (
    <div css={styles.group}>
      {label && (
        <span css={styles.label} data-error={error && 'error'}>
          {label}
        </span>
      )}
      <div id="codeInputs" css={styles.inputs}>
        {Array(size)
          .fill(placeholderSymbol)
          .map((it, idx) => (
            <input
              key={'regCode' + idx}
              css={styles.input}
              value={code?.[`symbol${idx + 1}`] ?? ''}
              name={`symbol${idx + 1}`}
              type="text"
              placeholder={it}
              maxLength={1}
              autoComplete="off"
              onChange={onChangeHandler}
              data-error={error && 'error'}
              {...props}
            />
          ))}
      </div>
      {error && <span css={styles.error}>{error}</span>}
    </div>
  );
};
