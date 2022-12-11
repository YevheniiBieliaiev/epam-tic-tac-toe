export interface IUserCreating {
  nickname: string;
  email: string;
  salt: string;
  passwordHash: string;
  tokenEmail: string;
}

export interface IUserCreated {
  id?: string;
  tokenEmail: string;
}

export interface IAuthID {
  id: string;
  tokenEmail?: string;
}

export interface IUserNickname {
  nickname: string;
}

export interface IUser {
  id: string;
  avatar: string;
  email: string;
  tokenEmail: string;
  nickname: string;
  role: string;
  isActivated: boolean;
}

export interface IUserSignIn {
  email: string;
  password: string;
}

export interface ISigned {
  avatar: string;
  nickname: string;
  accessToken: string;
  refreshToken: string;
}

export interface IUserHashes {
  salt: string;
  passwordHash: string;
}

export interface IJWTUserDTO {
  id: string;
  role: string;
  nickname: string;
}

export interface ISessions {
  id: string;
  token: string;
}

export interface IUpdateTokens {
  accessToken: string;
  refreshToken: string;
}
