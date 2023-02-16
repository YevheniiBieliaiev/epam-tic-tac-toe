import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { enLocal } from '@locals';
import { ClientRoutes } from '@enums';
import { Button, Spinner } from '@primitives';
import { useAppDispatch, useAppSelector } from '@hooks';
import { userSignout } from '@store';

export const UserInfo = () => {
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
    <div>
      <div>
        <span>{enLocal.profile.rating.header}</span>
      </div>
      <div>
        <span>{enLocal.profile.photo.header}</span>
      </div>
      <div>
        <span>{enLocal.profile.nickname.header}</span>
      </div>
      <div>
        <span>{enLocal.profile.emailAddress.header}</span>
      </div>
      <div>
        <span>{enLocal.profile.password.header}</span>
      </div>

      <div>
        <Button onClick={signOutHandler}>
          {loading ? <Spinner /> : enLocal.profile.logout}
        </Button>
      </div>
    </div>
  );
};
