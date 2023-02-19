import { enLocal } from '@locals';
import { Modal } from '@primitives';
import { ModalConfirm } from './primitives/modal-confirm';

export const ResetPasswordEmailModal = () => {
  const onCloseHandle = () => {
    console.log('close');
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
