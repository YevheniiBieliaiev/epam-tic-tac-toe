import type { Location } from 'react-router-dom';
import { ClientRoutes } from '@enums';

export const setTitle = (text: string) =>
  text ? `Tic Tac Toe | ${text}` : 'Tic Tac Toe';

export const isSignInLocation = (location: Location): boolean => {
  const path = new RegExp(ClientRoutes.SIGNIN);

  return path.test(location.pathname);
};
