export enum ValidationEmailError {
  EMAIL_PATTERN = 'Check your email please. Example: my-email@example.com',
  EMAIL_REQUIRED = 'Fill the email please',
}

export enum ValidationNicknameError {
  NICKNAME_PATTERN = 'Nickname can consist letters a-Z and numbers',
  NICKNAME_REQUIRED = 'Enter your nickname please',
  NICKNAME_MIN_SYMBOLS = 'Nickname should have a minimum of 1 symbol',
  NICKNAME_MAX_SYMBOLS = 'Nickname should have a maximum of 40 symbols',
}

export enum ValidationPasswordError {
  PASSWORD_MIN_SYMBOLS = 'Password length must be at least 8 characters',
  PASSWORD_MAX_SYMBOLS = 'Password length must not exceed 16 characters',
  PASSWORD_PATTERN = 'Password should include at least one uppercase letter, one lowercase letter and one symbol',
  PASSWORD_EMPTY = 'Fill the password please',
  DIFFERNT_PASSWORDS = 'Passwords are not same',
}

export enum ValidationCheckbox {
  TERMS = 'Need to accept terms and conditions',
}

export enum ValidationTokenEmail {
  REQUIRED = 'Please enter verification code',
  REQUIRED_SYMBOLS = `Please enter 6 symbols`,
}
