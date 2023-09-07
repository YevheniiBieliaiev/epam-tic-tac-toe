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
    switch (isAuth) {
      case true:
        socketEvents.connect();
        break;

      case false:
        socketEvents.disconnect();
        break;
    }

    socketEvents.onConnectError();

    socketEvents.onGetOpponentData('listening');

    return () => {
      socketEvents.disconnect();
    };
  }, [isAuth]);

  if (loader) {
    return <AppSpinner />;
  }

  return <AppRouterProvider accessToken={accessToken} />;
};
