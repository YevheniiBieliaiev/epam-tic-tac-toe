import { useNavigate } from 'react-router-dom';
import { ClientRoutes } from '@enums';
import { enLocal } from '@locals';
import { Modal } from '@primitives';
import { useAppDispatch } from '@hooks';
import { closeModal } from '@store';
import { ModalConfirm } from './primitives';

export const ConfirmEmailModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onCloseHandle = () => {
    navigate(`${ClientRoutes.SIGN}/${ClientRoutes.SIGNIN}`);
    dispatch(closeModal('accountConfirmationModal'));
  };

  return (
    <Modal onClose={onCloseHandle}>
      <ModalConfirm
        result="success"
        textResult={enLocal.forms.confirmEmail.modal.result}
        instruction={enLocal.forms.confirmEmail.modal.instruction}
      />
    </Modal>
  );
};
