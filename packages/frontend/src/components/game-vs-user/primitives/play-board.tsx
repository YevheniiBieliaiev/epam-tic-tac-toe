import { user, opponentData } from '@selectors';
import { useAppSelector } from '@hooks';
import { Board } from './board';
import { UserInfo, InfoDraft } from './user-info';
import * as styles from './styles';

export const PlayBoard = () => {
  const opponent = useAppSelector(opponentData);
  const userData = useAppSelector(user);

  return (
    <>
      <div>progress bar</div>

      <div css={styles.game}>
        <UserInfo opponent={userData} type="own" />
        <Board />
        {opponent ? (
          <UserInfo opponent={opponent} type="opponent" />
        ) : (
          <InfoDraft type="opponent" />
        )}
      </div>
    </>
  );
};
