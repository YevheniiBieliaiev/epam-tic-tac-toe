import type { ListProps } from './types';
import * as styles from './styles';

export const List = ({
  list,
  marks = 'filled circle',
  isOrdered = false,
}: ListProps) => (
  <>
    {isOrdered ? (
      <ol css={styles.ol}>
        {list.map((text, idx) => (
          <li css={styles.olList} key={text.charAt(idx) + idx}>
            {text}
          </li>
        ))}
      </ol>
    ) : (
      <ul>
        {list.map((text, idx) => (
          <li
            key={text.charAt(idx) + idx}
            css={styles.ulList}
            data-mark={marks}
          >
            {text}
          </li>
        ))}
      </ul>
    )}
  </>
);
