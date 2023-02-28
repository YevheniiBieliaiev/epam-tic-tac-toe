import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { enLocal } from '@locals';
import { ClientRoutes } from '@enums';
import { Button, Spinner } from '@primitives';
import { useAppDispatch, useAppSelector } from '@hooks';
import { userSignout } from '@store';

export const Logout = () => {
  const { loading, accessToken } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signOutHandler = () => {
    dispatch(userSignout());
  };

  useEffect(() => {
    if (!accessToken && !loading) {
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
