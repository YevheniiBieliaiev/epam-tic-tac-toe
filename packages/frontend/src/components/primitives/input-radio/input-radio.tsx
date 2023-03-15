import type { InputRadioProps } from './types';
import * as styles from './styles';

export const InputRadio = ({ id, label, ...props }: InputRadioProps) => (
  <div css={styles.inputRadio}>
    <input css={styles.radio} id={id} type="radio" {...props} />
    <label css={styles.label} htmlFor={id}>
      {label}
    </label>
  </div>
);
