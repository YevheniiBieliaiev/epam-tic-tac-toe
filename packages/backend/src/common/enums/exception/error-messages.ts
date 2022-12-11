export enum ErrorMessages {
  USER_DOES_NOT_EXIST = "User doesn't exist",
  NICKNAME_EXISTS = 'User with that nickname already exists',
  EMAIL_EXISTS = 'User with that email already exists',
  INTERNAL_SERVER_ERROR = 'Ups! Something went wrong!',
  UNAUTHORIZED_SESSION = 'Unauthorized session',
  WRONG_PASSWORD_OR_EMAIL = 'Sign-in error. Please check your password or email',
  CONFIRM_EMAIL = 'Please confirm your account using the code in the email',
  ACCOUNT_CONFIRM = 'Invalid or obsolete confirmation reference',
  NOT_FOUND_EMAIL = 'No user with specified email',
  EMAIL_TOKEN_ERROR = 'Invalid or obsolete verification code',
  WRONG_CURRENT_PASSWORD = 'Wrong current password',
}
