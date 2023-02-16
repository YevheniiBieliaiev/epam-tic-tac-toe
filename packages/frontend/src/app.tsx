import { useState, useEffect } from 'react';
import { AppRouterProvider } from '@providers';
import { useAuth, useAppSelector } from '@hooks';

export const App = () => {
  const [token, setToken] = useState<string>('');
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  useEffect(() => {
    setToken(accessToken);
  }, [accessToken]);

  useAuth();

  return <AppRouterProvider accessToken={token} />;
};
