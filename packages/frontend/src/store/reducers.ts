import type { Reducer, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { authReducer, AUTH_TYPES } from './auth';
import { toastReducer } from './toast';
import { modalReducer } from './modal';
import { profileReducer } from './profile';

const combinedReducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  toast: toastReducer,
  modal: modalReducer,
});

export type RootState = ReturnType<typeof combinedReducers>;

export const rootReducer: Reducer = (
  state: RootState,
  action: PayloadAction<string>,
) => {
  if (action.payload === AUTH_TYPES.SIGNOUT) {
    state = {} as RootState;
  }

  return combinedReducers(state, action);
};
