import joi from 'joi';
import {
  PASSWORD_REGEXP,
  ValidationRanges,
  ValidationPasswordError,
} from '@tic-tac-toe/shared';

export const userResetPasswordSchema = joi.object({
  password: joi
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
    .valid(joi.ref('password'))
    .messages({ 'any.only': ValidationPasswordError.DIFFERNT_PASSWORDS }),
});
