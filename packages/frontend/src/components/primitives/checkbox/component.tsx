import { forwardRef } from 'react';
import type { CheckboxProps } from './types';
import * as styles from './styles';

const InputCheckbox = (
  { id, label, error, ...props }: CheckboxProps,
  ref: React.LegacyRef<HTMLInputElement>,
) => (
  <div css={styles.checkboxWrapper}>
    <label
      css={styles.label}
      htmlFor={id}
      data-error={error ? 'error' : 'success'}
    >
      <input
        ref={ref}
        id={id}
        css={styles.checkbox}
        type="checkbox"
        data-error={error ? 'error' : 'success'}
        {...props}
      />
      <span>{label}</span>
    </label>
    {error && <span css={styles.error}>{error}</span>}
  </div>
);

export const Checkbox = forwardRef(InputCheckbox);
