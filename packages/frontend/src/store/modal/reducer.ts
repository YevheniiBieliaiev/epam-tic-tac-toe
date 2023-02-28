import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IModalState } from '@interfaces';
import type { TModalsStateKeys } from '@types';
import { openModal } from './actions';

const initialState: IModalState = {
  accountConfirmationModal: false,
  emailPasswordModal: false,
  verifyNewEmailModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    closeModal(state, action: PayloadAction<TModalsStateKeys>) {
      state[action.payload] = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(openModal, (state, { payload }) => {
      state[payload.modal] = true;
    });
  },
});

export const modalReducer = modalSlice.reducer;

export const { closeModal } = modalSlice.actions;
