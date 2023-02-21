import { useNavigate } from 'react-router-dom';
import { enLocal } from '@locals';
import { Modal } from '@primitives';
import { ClientRoutes } from '@enums';
import { useAppDispatch } from '@hooks';
import { closeModal } from '@store';
import { ModalConfirm } from './primitives/modal-confirm';

export const ResetPasswordEmailModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onCloseHandle = () => {
    dispatch(closeModal('emailPasswordModal'));
    navigate(ClientRoutes.EMAIL_INFO);
  };

  return (
    <Modal onClose={onCloseHandle}>
      <ModalConfirm
        result="success"
        textResult={enLocal.forms.resetPassword.modal.result}
        instruction={enLocal.forms.resetPassword.modal.instruction}
      />
    </Modal>
  );
};
