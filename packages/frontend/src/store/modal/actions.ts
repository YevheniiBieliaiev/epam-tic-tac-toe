import { createAction } from '@reduxjs/toolkit';
import type { TModalsStateKeys } from '@types';
import { MODAL_TYPES } from './action-types';

export const openModal = createAction(
  MODAL_TYPES.OPEN_MODAL,
  (modal: TModalsStateKeys) => ({
    payload: {
      modal,
    },
  }),
);
