import { Environment } from '@tic-tac-toe/shared';

type ProcessEnvKeys = 'NODE_ENV' | 'PORT';

type JWTEnvKeys =
  | 'JWT_SECRET_KEY'
  | 'JWT_ACCESS_TOKEN_EXPIRATION_MIN'
  | 'REFRESH_TOKEN_EXPIRATION_MIN';

type EnvKeys = ProcessEnvKeys | JWTEnvKeys;

export const getEnv = (key: EnvKeys): string => process.env[key];

export const isProduction = getEnv('NODE_ENV') === Environment.PRODUCTION;
