import { useState, useEffect } from 'react';
import { AppRouterProvider } from '@providers';
import { AppSpinner } from '@primitives';
import { useAuth, useAppSelector } from '@hooks';

export const App = () => {
  const [token, setToken] = useState<string>('');
  const { accessToken, appLoader } = useAppSelector((state) => state.auth);

  useEffect(() => {
    setToken(accessToken);
  }, [accessToken]);

  useAuth();

  if (appLoader) {
    return <AppSpinner />;
  }

  return <AppRouterProvider accessToken={token} />;
};
