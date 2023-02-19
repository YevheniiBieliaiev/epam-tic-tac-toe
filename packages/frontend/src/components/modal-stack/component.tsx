import { useAppSelector } from '@hooks';
import { ConfirmEmailModal } from '@components/modal-inner';

export const ModalStack = () => {
  const { accountConfirmationModal } = useAppSelector((state) => state.modal);

  return <>{accountConfirmationModal && <ConfirmEmailModal />}</>;
};
