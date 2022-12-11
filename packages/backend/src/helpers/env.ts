import { Environment } from '@tic-tac-toe/shared';

type ProcessEnvKeys =
  | 'NODE_ENV'
  | 'PORT'
  | 'SOCKETS_PORT'
  | 'APP_URL'
  | 'APP_NAME'
  | 'APP_EMAIL';

type JWTEnvKeys =
  | 'MAX_SESSIONS'
  | 'JWT_ACCESS_TOKEN_EXPIRATION'
  | 'JWT_REFRESH_TOKEN_EXPIRATION'
  | 'JWT_RESET_EMAIL_TOKEN_EXPIRATION'
  | 'JWT_SECRET_ACCESS_TOKEN'
  | 'JWT_SECRET_REFRESH_TOKEN'
  | 'JWT_SECRET_EMAIL_TOKEN'
  | 'JWT_REFRESH_TOKEN_KEY';

type S3StorageEnvKeys =
  | 'S3_API_KEY_ID'
  | 'S3_API_ACCESS_KEY'
  | 'S3_BUCKET_NAME';

type EmailEnvKeys = 'EMAIL_SERVICE_API_KEY';

type EnvKeys = ProcessEnvKeys | JWTEnvKeys | S3StorageEnvKeys | EmailEnvKeys;

export const getEnv = (key: EnvKeys): string => process.env[key];

export const isProduction = getEnv('NODE_ENV') === Environment.PRODUCTION;
