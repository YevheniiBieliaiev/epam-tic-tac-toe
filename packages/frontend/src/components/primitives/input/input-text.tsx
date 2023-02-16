import { useState, forwardRef } from 'react';
import { SVGIcon } from '@primitives';
import type { InputTextProps } from './types';
import * as styles from './styles';

const Input = (
  {
    id,
    label,
    placeholder,
    error,
    isPassword = false,
    ...props
  }: InputTextProps,
  ref: React.LegacyRef<HTMLInputElement>,
) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div>
      {label && (
        <label
          css={styles.label}
          htmlFor={id}
          data-error={error ? 'error' : 'success'}
        >
          {label}
        </label>
      )}
      <div css={styles.inputInner}>
        <input
          ref={ref}
          css={styles.input}
          id={id}
          type={isPassword ? (showPassword ? 'text' : 'password') : 'text'}
          placeholder={placeholder}
          data-error={error ? 'error' : 'success'}
          {...props}
        />
        {error && <span css={styles.error}>{error}</span>}
        {isPassword && (
          <button
            type="button"
            css={styles.show}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <SVGIcon
              icon={showPassword ? 'eyeVisible' : 'eyeHidden'}
              size="xs"
              cssExtension={styles.eye}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export const InputText = forwardRef(Input);
