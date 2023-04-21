import { lazy, Suspense } from 'react';
import { useAppSelector } from '@hooks';
import { modalStates } from '@selectors';

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

const SaveScoreModal = lazy(() =>
  import('../modal-inner').then(({ SaveScoreModal }) => ({
    default: SaveScoreModal,
  })),
);

export const ModalStack = () => {
  const {
    accountConfirmationModal,
    emailPasswordModal,
    verifyNewEmailModal,
    saveScoreModal,
  } = useAppSelector(modalStates);

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

      {saveScoreModal && (
        <Suspense fallback={null}>
          <SaveScoreModal />
        </Suspense>
      )}
    </>
  );
};
