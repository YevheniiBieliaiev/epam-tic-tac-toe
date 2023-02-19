type Result = 'success' | 'error';

export interface NotificationResultProps {
  result: Result;
}

export interface ModalConfirmProps {
  result: Result;
  textResult: string;
  instruction: string;
  linkPath?: string;
  linkLabel?: string;
}
