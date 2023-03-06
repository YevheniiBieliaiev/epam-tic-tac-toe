import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store/reducers';

const confirmModal = (state: RootState) => state.modal.accountConfirmationModal;
const passwordModal = (state: RootState) => state.modal.emailPasswordModal;
const verifyEmailModal = (state: RootState) => state.modal.verifyNewEmailModal;

export const modalStates = createSelector(
  [confirmModal, passwordModal, verifyEmailModal],
  (accountConfirmationModal, emailPasswordModal, verifyNewEmailModal) => ({
    accountConfirmationModal,
    emailPasswordModal,
    verifyNewEmailModal,
  }),
);
