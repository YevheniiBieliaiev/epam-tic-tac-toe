import type { FC } from 'react';
import { useAppSelector } from '@hooks';
import type { IToast } from '@interfaces';
import * as styles from './styles';

const Toast: FC<IToast> = ({ id, level, description }) => (
  <div css={styles.toastWrapper} id={'toast' + id} data-variant={level}>
    <span css={styles.toastLevel}>{level.charAt(0).toUpperCase()}</span>
    <span css={styles.toastDescription}>{description}</span>
  </div>
);

export const ToastStack = (): JSX.Element => {
  const toastList = useAppSelector((state) => state.toast.toastList);

  return (
    <>
      {toastList.map(({ id, level, description }) => (
        <Toast key={id} id={id} description={description} level={level} />
      ))}
    </>
  );
};
