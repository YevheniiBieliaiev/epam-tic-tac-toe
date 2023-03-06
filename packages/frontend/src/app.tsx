import { useState, useEffect } from 'react';
import { AppRouterProvider } from '@providers';
import { AppSpinner } from '@primitives';
import { useAuth, useAppSelector } from '@hooks';
import { userAccessToken, appLoader } from '@selectors';

export const App = () => {
  const [token, setToken] = useState<string>('');
  const accessToken = useAppSelector(userAccessToken);
  const loader = useAppSelector(appLoader);

  useEffect(() => {
    setToken(accessToken);
  }, [accessToken]);

  useAuth();

  if (loader) {
    return <AppSpinner />;
  }

  return <AppRouterProvider accessToken={token} />;
};
