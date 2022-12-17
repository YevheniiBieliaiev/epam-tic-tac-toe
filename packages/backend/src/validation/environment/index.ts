import joi from 'joi';
import { getEnv } from '@helpers';

const envKeys = {
  DATABASE_URL: getEnv('DATABASE_URL'),
  PORT: +getEnv('PORT'),
  SOCKETS_PORT: +getEnv('SOCKETS_PORT'),
  APP_URL: getEnv('APP_URL'),
  APP_NAME: getEnv('APP_NAME'),
  APP_EMAIL: getEnv('APP_EMAIL'),
  JWT_ACCESS_TOKEN_EXPIRATION: getEnv('JWT_ACCESS_TOKEN_EXPIRATION'),
  JWT_REFRESH_TOKEN_EXPIRATION: getEnv('JWT_REFRESH_TOKEN_EXPIRATION'),
  JWT_RESET_EMAIL_TOKEN_EXPIRATION: getEnv('JWT_RESET_EMAIL_TOKEN_EXPIRATION'),
  JWT_SECRET_ACCESS_TOKEN: getEnv('JWT_SECRET_ACCESS_TOKEN'),
  JWT_SECRET_REFRESH_TOKEN: getEnv('JWT_SECRET_REFRESH_TOKEN'),
  JWT_SECRET_EMAIL_TOKEN: getEnv('JWT_SECRET_EMAIL_TOKEN'),
  JWT_REFRESH_TOKEN_KEY: getEnv('JWT_REFRESH_TOKEN_KEY'),
  MAX_SESSIONS: +getEnv('MAX_SESSIONS'),
  NODE_ENV: getEnv('NODE_ENV'),
  EMAIL_SERVICE_API_KEY: getEnv('EMAIL_SERVICE_API_KEY'),
  S3_API_KEY_ID: getEnv('S3_API_KEY_ID'),
  S3_API_ACCESS_KEY: getEnv('S3_API_ACCESS_KEY'),
  S3_BUCKET_NAME: getEnv('S3_BUCKET_NAME'),
};

const envVarsSchema = joi.object({
  DATABASE_URL: joi.string().required(),
  PORT: joi.number().positive()
.required(),
  SOCKETS_PORT: joi.number().positive()
.required(),
  APP_URL: joi.string().required(),
  APP_NAME: joi.string().required(),
  APP_EMAIL: joi.string().required(),
  JWT_ACCESS_TOKEN_EXPIRATION: joi.string().required(),
  JWT_REFRESH_TOKEN_EXPIRATION: joi.string().required(),
  JWT_RESET_EMAIL_TOKEN_EXPIRATION: joi.string().required(),
  JWT_SECRET_ACCESS_TOKEN: joi.string().required(),
  JWT_SECRET_REFRESH_TOKEN: joi.string().required(),
  JWT_SECRET_EMAIL_TOKEN: joi.string().required(),
  JWT_REFRESH_TOKEN_KEY: joi.string().required(),
  MAX_SESSIONS: joi.number().positive()
.required(),
  NODE_ENV: joi.string().valid('production', 'development')
.required(),
  EMAIL_SERVICE_API_KEY: joi.string().required(),
  S3_API_KEY_ID: joi.string().required(),
  S3_API_ACCESS_KEY: joi.string().required(),
  S3_BUCKET_NAME: joi.string().required(),
});

const { error: envError } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(envKeys);

export { envError };
