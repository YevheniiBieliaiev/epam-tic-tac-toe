import { ValidationRanges } from '@tic-tac-toe/shared';
import type { IPasswordResult } from '@interfaces';

export const checkPassword = (password: string): IPasswordResult => {
  const regExpUpper = /[A-Z]/;
  const regExpLower = /[a-z]/;
  const regExpSymbols = /[~!@#$%^*\-_=+[{\]}/;:,.?]/;

  const minLength = password.length >= ValidationRanges.MIN_PASSWORD_SYMBOLS;
  const lowerCase = regExpLower.test(password);
  const upperCase = regExpUpper.test(password);
  const symbols = regExpSymbols.test(password);

  return {
    minLength: minLength ? 'success' : 'error',
    lowerCase: lowerCase ? 'success' : 'error',
    upperCase: upperCase ? 'success' : 'error',
    symbols: symbols ? 'success' : 'error',
  };
};
