// import { useNavigate } from 'react-router-dom';
import { BoardLayout } from '@components/layout';
import { ButtonInternal, Button } from '@primitives';
import { enLocal } from '@locals';
import { ClientRoutes } from '@enums';
// import { useAppSelector } from '@hooks';
// import { userAccessToken } from '@selectors';
import { Square } from './primitives';
import * as styles from './styles';

export const HomeContent = () => {
  // const navigate = useNavigate();
  // const accessToken = useAppSelector(userAccessToken);

  const onHandlePlayVsRandom = () => {
    console.log('PlayVsRandom');
  };

  const onHandlePlayVsFriend = () => {
    console.log('PlayVsFriend');
  };

  return (
    <BoardLayout>
      <div css={styles.homeBoard}>
        <div css={styles.homeHeader}>
          <h1>{enLocal.home.header}</h1>
        </div>

        <div css={styles.gameBoard}>
          <div css={styles.squares}>
            {Array(9)
              .fill(null)
              .map((_it, idx) => (
                <Square key={'hsq' + idx} />
              ))}
          </div>

          <div css={styles.buttonGroup}>
            <div>
              <ButtonInternal
                path={ClientRoutes.BOT_GAME}
                label={enLocal.home.buttonGroup.playBot}
                type="light"
              />
            </div>

            <div>
              <Button contrast="light" onClick={onHandlePlayVsRandom} disabled={true}>
                {enLocal.home.buttonGroup.randomPlayer}
              </Button>
            </div>

            <div>
              <Button contrast="light" onClick={onHandlePlayVsFriend} disabled={true}>
                {enLocal.home.buttonGroup.friendPlay}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </BoardLayout>
  );
};
