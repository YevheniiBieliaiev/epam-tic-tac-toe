import type { Location } from 'react-router-dom';
import { ClientRoutes } from '@enums';
import type { DefineLocation } from './types';

export const defineLocation = (location: Location): DefineLocation => {
  const signin = new RegExp(ClientRoutes.SIGNIN);
  const signup = new RegExp(ClientRoutes.SIGNUP);
  const resetEmail = new RegExp(ClientRoutes.RESET_PASSWORD_EMAIL);

  return {
    signin: signin.test(location.pathname),
    signup: signup.test(location.pathname),
    resetEmail: resetEmail.test(location.pathname),
  };
};
