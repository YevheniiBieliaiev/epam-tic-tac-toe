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
  passwordUpdatedAt: Date;
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
  passwordUpdatedAt: Date;
}

export interface IGameBotStat {
  won: number;
  drow: number;
  robotWon: number;
}

export interface IGameUserStat {
  won: number;
  drow: number;
  lose: number;
}
