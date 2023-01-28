export interface ISignUpForm {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
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
