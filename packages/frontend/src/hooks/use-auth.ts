import { useEffect } from 'react';
import { useAppDispatch } from '@hooks';
import { authTokens } from '@store';

export const useAuth = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authTokens());
  }, [dispatch]);
};
