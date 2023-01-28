import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { toastReducer } from './toast';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    toast: toastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
