import { lazy } from 'react';

export const EmailInstructionPage = lazy(() =>
  import('../components/email-instruction').then(({ EmailInstruction }) => ({
    default: EmailInstruction,
  })),
);
