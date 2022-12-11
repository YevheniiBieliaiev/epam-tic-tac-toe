export interface IResponseLogin {
  accessToken: string;
  avatar: string;
  nickname: string;
}

export interface IResponseUpdateTokens {
  accessToken: string;
}

export interface IResponseProfile {
  avatar: string;
  nickname: string;
  email: string;
  isActivated: boolean;
}

export interface IResponseUpdNickname {
  nickname: string;
}

export interface IResponseUpdEmail {
  email: string;
  isActivated: boolean;
}

export interface IResponseVerifyEmail {
  isActivated: boolean;
}

export interface IResponseUpdAvatar {
  avatar: string | undefined;
}
