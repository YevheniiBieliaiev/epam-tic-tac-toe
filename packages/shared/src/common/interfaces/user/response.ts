export interface IResponseLogin {
  accessToken: string;
  avatar: string;
  nickname: string;
}

export interface IResponseUpdateTokens {
  accessToken: string;
}

export interface IResponseProfile {
  passwordUpdatedAt: Date;
  email: string;
}

export interface IResponseUpdNickname {
  nickname: string;
}

export interface IResponseUpdEmail {
  email?: string;
  isActivated: boolean;
}

export interface IResponseUpdAvatar {
  avatar: string | undefined;
}
