import { createAction, nanoid } from '@reduxjs/toolkit';
import type { IAddToast, IToast } from '@interfaces';
import { ToastDuration } from '@enums';
import { store } from '@store';
import { TOAST_TYPES } from './action-types';
import { deleteToast } from './reducer';

export const addToast = createAction(
  TOAST_TYPES.ADD_TOAST,
  ({ level, description }: IAddToast) => {
    const id = nanoid();

    setTimeout(() => {
      store.dispatch(deleteToast({ toastId: id }));
    }, ToastDuration[level]);

    return {
      payload: <IToast>{
        id,
        level,
        description,
      },
    };
  },
);
