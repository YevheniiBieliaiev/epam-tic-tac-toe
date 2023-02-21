import joi from 'joi';
import { EMAIL_REGEXP, ValidationEmailError } from '@tic-tac-toe/shared';

export const userResetEmailSchema = joi.object({
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
