import joi from 'joi';
import {
  EMAIL_REGEXP,
  PASSWORD_REGEXP,
  NAME_REGEXP,
  ValidationRanges,
  ValidationEmailError,
  ValidationNicknameError,
  ValidationPasswordError,
  ValidationTokenEmail,
} from '@tic-tac-toe/shared';

export const profileNicknameSchema = joi.object({
  nickname: joi
    .string()
    .required()
    .min(ValidationRanges.MIN_NAME_SYMBOLS)
    .max(ValidationRanges.MAX_NAME_SYMBOLS)
    .pattern(NAME_REGEXP)
    .messages({
      'string.pattern.base': ValidationNicknameError.NICKNAME_PATTERN,
      'string.min': ValidationNicknameError.NICKNAME_MIN_SYMBOLS,
      'string.max': ValidationNicknameError.NICKNAME_MAX_SYMBOLS,
      'string.empty': ValidationNicknameError.NICKNAME_REQUIRED,
    }),
});

export const profileEmailSchema = joi.object({
  email: joi
    .string()
    .required()
    .pattern(EMAIL_REGEXP)
    .email({ tlds: { allow: false } })
    .messages({
      'string.pattern.base': ValidationEmailError.EMAIL_PATTERN,
      'string.email': ValidationEmailError.EMAIL_REQUIRED,
      'string.empty': ValidationEmailError.EMAIL_REQUIRED,
    }),
});

export const profilePasswordSchema = joi.object({
  currentPassword: joi.string().trim()
.required(),

  newPassword: joi
    .string()
    .required()
    .min(ValidationRanges.MIN_PASSWORD_SYMBOLS)
    .max(ValidationRanges.MAX_PASSWORD_SYMBOLS)
    .pattern(PASSWORD_REGEXP)
    .messages({
      'string.pattern.base': ValidationPasswordError.PASSWORD_PATTERN,
      'string.min': ValidationPasswordError.PASSWORD_MIN_SYMBOLS,
      'string.max': ValidationPasswordError.PASSWORD_MAX_SYMBOLS,
      'string.empty': ValidationPasswordError.PASSWORD_EMPTY,
    }),

  confirmPassword: joi
    .any()
    .valid(joi.ref('newPassword'))
    .messages({ 'any.only': ValidationPasswordError.DIFFERNT_PASSWORDS }),
});

export const profileEmailTokenSchema = joi.object({
  tokenEmail: joi
    .string()
    .trim()
    .required()
    .min(ValidationRanges.TOKEN_EMAIL_SYMBOLS)
    .messages({
      'string.empty': ValidationTokenEmail.REQUIRED,
      'string.min': ValidationTokenEmail.REQUIRED_SYMBOLS,
    }),
});
