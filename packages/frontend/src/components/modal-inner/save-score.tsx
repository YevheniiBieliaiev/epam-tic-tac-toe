import { Modal } from '@primitives';
import { useAppDispatch } from '@hooks';
import { closeModal } from '@store';
import { TolltipSign } from './primitives';

export const SaveScoreModal = () => {
  const dispatch = useAppDispatch();

  const onCloseHandle = () => {
    dispatch(closeModal('saveScoreModal'));
  };

  return (
    <Modal onClose={onCloseHandle}>
      <TolltipSign />
    </Modal>
  );
};
