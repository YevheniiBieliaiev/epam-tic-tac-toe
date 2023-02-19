import joi from 'joi';
import {
  EMAIL_REGEXP,
  ValidationEmailError,
  ValidationTokenEmail,
  ValidationRanges,
} from '@tic-tac-toe/shared';

export const userConfirmEmailSchema = joi.object({
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
