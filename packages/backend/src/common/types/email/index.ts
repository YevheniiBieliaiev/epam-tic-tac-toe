export type TTemplates = 'registration' | 'reset-password' | 'update-email';

export type TLocals = {
  emailFrom: string;
  email: string;
  appUrl: string;
  token: string;
};

export type TPart = {
  email: string;
  name?: string;
};

export type TSendSmtpEmail = {
  subject: string;
  sender: TPart;
  to: TPart[];
  htmlContent: string;
};
