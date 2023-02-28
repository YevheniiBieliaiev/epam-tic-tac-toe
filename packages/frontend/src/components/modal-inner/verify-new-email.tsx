import { enLocal } from '@locals';
import { Modal } from '@primitives';
import { useAppDispatch } from '@hooks';
import { closeModal } from '@store';
import { ModalConfirm } from './primitives/modal-confirm';

export const VerifyNewEmailModal = () => {
  const dispatch = useAppDispatch();

  const onCloseHandle = () => {
    dispatch(closeModal('verifyNewEmailModal'));
  };

  return (
    <Modal onClose={onCloseHandle}>
      <ModalConfirm
        result="success"
        textResult={enLocal.forms.confirmEmail.textContent.header}
        instruction={enLocal.forms.confirmEmail.textContent.instruction}
      />
    </Modal>
  );
};
