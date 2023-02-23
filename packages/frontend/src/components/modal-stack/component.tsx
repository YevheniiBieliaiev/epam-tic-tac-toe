import { lazy, Suspense } from 'react';
import { useAppSelector } from '@hooks';

const ConfirmEmailModal = lazy(() =>
  import('../modal-inner').then(({ ConfirmEmailModal }) => ({
    default: ConfirmEmailModal,
  })),
);

const ResetPasswordEmailModal = lazy(() =>
  import('../modal-inner').then(({ ResetPasswordEmailModal }) => ({
    default: ResetPasswordEmailModal,
  })),
);

export const ModalStack = () => {
  const { accountConfirmationModal, emailPasswordModal } = useAppSelector(
    (state) => state.modal,
  );

  return (
    <>
      {accountConfirmationModal && (
        <Suspense fallback={null}>
          <ConfirmEmailModal />
        </Suspense>
      )}

      {emailPasswordModal && (
        <Suspense fallback={null}>
          <ResetPasswordEmailModal />
        </Suspense>
      )}
    </>
  );
};
