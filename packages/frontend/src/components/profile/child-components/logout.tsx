import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { enLocal } from '@locals';
import { ClientRoutes } from '@enums';
import { Button, Spinner } from '@primitives';
import { useAppDispatch, useAppSelector } from '@hooks';
import { socketEvents } from '@socket';
import { userSignout } from '@store';
import { authLoader, userAccessToken } from '@selectors';

export const Logout = () => {
  const loading = useAppSelector(authLoader);
  const accessToken = useAppSelector(userAccessToken);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signOutHandler = () => {
    dispatch(userSignout());
  };

  useEffect(() => {
    if (!accessToken && !loading) {
      socketEvents.disconnect();
      navigate(ClientRoutes.HOME);
    }
  }, [accessToken, navigate, loading]);

  return (
    <>
      <Button onClick={signOutHandler}>
        {loading ? <Spinner /> : enLocal.profile.logout}
      </Button>
    </>
  );
};
