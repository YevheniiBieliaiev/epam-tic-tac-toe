export interface ICandidate {
  nickname: string;
  email: string;
  password: string;
}

export interface IConfirmEmail {
  email: string;
  tokenEmail: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISendEmail {
  email: string;
}

export interface IResetPassword {
  password: string;
}

export interface IUpdateNickname {
  nickname: string;
}

export interface IUpdateEmail {
  email: string;
}

export interface IEmailVerification {
  tokenEmail: string;
}

export interface IUpdatePassword {
  currentPassword: string;
  newPassword: string;
}
