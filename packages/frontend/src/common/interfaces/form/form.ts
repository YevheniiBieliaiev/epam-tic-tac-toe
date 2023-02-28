export interface ISignUpForm {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export interface ISignInForm {
  email: string;
  password: string;
}

export interface IResetPasswordEmail {
  email: string;
}

export interface IResetPassword {
  password: string;
  confirmPassword: string;
}

export interface INewNickname {
  nickname: string;
}

export interface INewEmail {
  email: string;
}

export interface INewPassword {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
