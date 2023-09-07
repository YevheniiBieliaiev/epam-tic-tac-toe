import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BoardLayout } from '@components/layout';
import { PageTitle, ButtonInternal, Button } from '@primitives';
import { enLocal } from '@locals';
import { ClientRoutes } from '@enums';
import { closeModal, openModal } from '@store';
import { useAppDispatch, useAppSelector } from '@hooks';
import { userAuth } from '@selectors';
import { socketEvents } from '@socket';
import { Square } from './primitives';
import * as styles from './styles';

export const HomeContent = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAppSelector(userAuth);

  useEffect(() => () => {
    dispatch(closeModal('signToPlayModal'));
  });

  const onHandlePlayVsUser = () => {
    switch (isAuth) {
      case true:
        socketEvents.emitRandomOpponent();
        navigate(ClientRoutes.USERS_GAME);
        break;
      case false:
        dispatch(openModal('signToPlayModal'));
        break;
    }
  };

  return (
    <PageTitle>
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
                <Button contrast="light" onClick={onHandlePlayVsUser}>
                  {enLocal.home.buttonGroup.randomPlayer}
                </Button>
              </div>

              <div>
                <Button contrast="light" onClick={onHandlePlayVsUser}>
                  {enLocal.home.buttonGroup.friendPlay}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </BoardLayout>
    </PageTitle>
  );
};
