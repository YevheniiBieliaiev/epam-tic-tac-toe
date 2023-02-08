import type { UnorderedListProps } from './types';
import * as styles from './styles';

export const UnorderedList = ({
  list,
  marks = 'filled circle',
}: UnorderedListProps) => (
  <ul>
    {list.map((text, idx) => (
      <li key={text.charAt(idx) + idx} css={styles.ulList} data-mark={marks}>
        {text}
      </li>
    ))}
  </ul>
);
