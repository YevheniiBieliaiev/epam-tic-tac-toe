import { Modal } from '@primitives';
import { enLocal } from '@locals';
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
      <TolltipSign
        header={enLocal.playBoard.bot.tooltip.signResult.header}
        tip={enLocal.playBoard.bot.tooltip.signResult.tip}
      />
    </Modal>
  );
};

export const SignToPlay = () => {
  const dispatch = useAppDispatch();

  const onCloseHandle = () => {
    dispatch(closeModal('signToPlayModal'));
  };

  return (
    <Modal onClose={onCloseHandle}>
      <TolltipSign tip={enLocal.playBoard.bot.tooltip.signGame.tip} />
    </Modal>
  );
};
