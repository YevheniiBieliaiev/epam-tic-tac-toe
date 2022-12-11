export enum ApiRoutes {
  HEALTH = '/health',
  USER = '/auth',
  PROFILE = '/profile',
}

export enum AuthSubRoutes {
  SIGN_IN = '/sign-in',
  SIGN_OUT = '/sign-out',
  REGISTER = '/register',
  REFRESH_TOKEN = '/refresh-token',
  CONFIRM_EMAIL = '/confirm-email',
  PASSWORD_CHANGE_EMAIL = '/password-email',
  PASSWORD_CHANGE = '/password-change',
}

export enum RouteIdParam {
  TOKEN = '/:token',
}

export enum ProfileSubRoutes {
  USER_PROFILE = '/user-profile',
  UPDATE_NICKNAME = '/update-nickname',
  UPDATE_EMAIL = '/update-email',
  EMAIL_VERIFICATION = '/email-verification',
  UPDATE_PASSWORD = '/update-password',
  UPDATE_AVATAR = '/update-avatar',
}
