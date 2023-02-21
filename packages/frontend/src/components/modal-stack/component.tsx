import { useAppSelector } from '@hooks';
import {
  ConfirmEmailModal,
  ResetPasswordEmailModal,
} from '@components/modal-inner';

export const ModalStack = () => {
  const { accountConfirmationModal, emailPasswordModal } = useAppSelector(
    (state) => state.modal,
  );

  return (
    <>
      {accountConfirmationModal && <ConfirmEmailModal />}
      {emailPasswordModal && <ResetPasswordEmailModal />}
    </>
  );
};
