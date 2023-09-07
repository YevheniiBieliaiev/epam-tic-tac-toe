import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'store/reducers';

const confirmModal = (state: RootState) => state.modal.accountConfirmationModal;
const passwordModal = (state: RootState) => state.modal.emailPasswordModal;
const verifyEmailModal = (state: RootState) => state.modal.verifyNewEmailModal;
const saveScoreModal = (state: RootState) => state.modal.saveScoreModal;
const signToPlay = (state: RootState) => state.modal.signToPlayModal;

export const modalStates = createSelector(
  [confirmModal, passwordModal, verifyEmailModal, saveScoreModal, signToPlay],
  (
    accountConfirmationModal,
    emailPasswordModal,
    verifyNewEmailModal,
    saveScoreModal,
    signToPlayModal,
  ) => ({
    accountConfirmationModal,
    emailPasswordModal,
    verifyNewEmailModal,
    saveScoreModal,
    signToPlayModal,
  }),
);
