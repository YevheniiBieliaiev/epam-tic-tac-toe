import type React from 'react';

export interface EditedFieldProps {
  label: string;
  isEdit: boolean;
  onClick: () => void;
  children: React.ReactNode;
}
