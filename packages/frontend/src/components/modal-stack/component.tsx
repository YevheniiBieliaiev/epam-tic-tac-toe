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

const VerifyNewEmailModal = lazy(() =>
  import('../modal-inner').then(({ VerifyNewEmailModal }) => ({
    default: VerifyNewEmailModal,
  })),
);

export const ModalStack = () => {
  const { accountConfirmationModal, emailPasswordModal, verifyNewEmailModal } =
    useAppSelector((state) => state.modal);

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

      {verifyNewEmailModal && (
        <Suspense fallback={null}>
          <VerifyNewEmailModal />
        </Suspense>
      )}
    </>
  );
};
