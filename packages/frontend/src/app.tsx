import { useEffect } from 'react';
import { AppRouterProvider } from '@providers';
import { socketEvents } from '@socket';
import { AppSpinner } from '@primitives';
import { useAuth, useAppSelector } from '@hooks';
import { userAccessToken, appLoader, userAuth } from '@selectors';

export const App = () => {
  const accessToken = useAppSelector(userAccessToken);
  const isAuth = useAppSelector(userAuth);
  const loader = useAppSelector(appLoader);

  useAuth();

  useEffect(() => {
    if (isAuth) {
      socketEvents.connect();
    } else {
      socketEvents.disconnect();
    }

    socketEvents.connectError();

    return () => {
      socketEvents.disconnect();
    };
  }, [isAuth]);

  if (loader) {
    return <AppSpinner />;
  }

  return <AppRouterProvider accessToken={accessToken} />;
};
