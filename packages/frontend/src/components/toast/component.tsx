import type { FC } from 'react';
import type { IToast } from '@interfaces';
import { useAppSelector } from '@hooks';
import { toastStack } from '@selectors';
import * as styles from './styles';

const Toast: FC<IToast> = ({ id, level, description }) => (
  <div css={styles.toast} id={'toast' + id} data-variant={level}>
    <span css={styles.level}>
      {level.charAt(0).toUpperCase() + level.substring(1)}
    </span>
    <span css={styles.description}>{description}</span>
  </div>
);

export const ToastStack = (): JSX.Element => {
  const toastList = useAppSelector(toastStack);

  return (
    <div css={styles.toastStack}>
      {toastList.map(({ id, level, description }) => (
        <Toast key={id} id={id} description={description} level={level} />
      ))}
    </div>
  );
};
