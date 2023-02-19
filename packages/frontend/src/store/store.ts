import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { toastReducer } from './toast';
import { modalReducer } from './modal';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    toast: toastReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
