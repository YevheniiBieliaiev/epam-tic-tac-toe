import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { isProduction } from '@helpers';

interface ISetFormats {
  consoleFormat: winston.Logform.Format;
  fileFormat: winston.Logform.Format;
}

type TConsoleTransportInstance = typeof winston.transports.Console;

const levels = {
  error: 0,
  warn: 1,
  info: 2,
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'blue',
};

class Logger {
  private _logger: winston.Logger;

  private _rootLogDir = 'logs';

  private _logDir = `${this._rootLogDir}/all`;

  private _errorDir = `${this._rootLogDir}/error`;

  private _logMaxFileSize = '1m'; //m = mb

  private _errorMaxFileSize = '1m'; //m = mb

  private _setFormats(): ISetFormats {
    const {
      format,
      format: { errors, timestamp, label, printf },
    } = winston;

    const consoleFormat: winston.Logform.Format = winston.format.combine(
      errors({ stack: true }),
      timestamp({ format: 'YY-MM-DD HH:mm:ss' }),
      label({ label: '[LOGGER]' }),
      format((info) => {
        info.level = info.level.toUpperCase();

        return info;
      })(),
      printf(
        (info) =>
          `${info.label} [${info.timestamp}] [${info.level}]: ${info.message}`,
      ),
    );

    const fileFormat: winston.Logform.Format = winston.format.combine(
      errors({ stack: true }),
      timestamp({ format: 'YY-MM-DD HH:mm:ss' }),
      format((info) => {
        info.level = info.level.toUpperCase();

        return info;
      })(),
      printf(
        (info) =>
          `[${info.timestamp}] [${info.level}]: ${
            info.message
          }\n${JSON.stringify(info, null, 4)}\n\n`,
      ),
    );

    return {
      consoleFormat,
      fileFormat,
    };
  }

  private _createTransports(): (
    | DailyRotateFile
    | winston.transports.ConsoleTransportInstance
  )[] {
    const logFormats = this._setFormats();

    const transports: (DailyRotateFile | TConsoleTransportInstance)[] = [
      new DailyRotateFile({
        dirname: this._logDir,
        filename: '%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH-MM',
        maxSize: this._logMaxFileSize,
        maxFiles: 3,
        format: logFormats.fileFormat,
      }),

      new DailyRotateFile({
        level: 'error',
        dirname: this._errorDir,
        filename: '%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH-MM',
        maxSize: this._errorMaxFileSize,
        maxFiles: 3,
        format: logFormats.fileFormat,
      }),
    ];

    if (!isProduction) {
      transports.push(
        new winston.transports.Console({
          format: logFormats.consoleFormat,
        }),
      );
    }

    return transports;
  }

  constructor() {
    winston.addColors(colors);
    this._logger = winston.createLogger({
      levels,
      transports: this._createTransports(),
    });
  }

  public info(message: string | Record<string, unknown>): void {
    this._logger.info(message);
  }

  public warn(message: string | Record<string, unknown>): void {
    this._logger.warn(message);
  }

  public error(message: string | Record<string, unknown> | Error): void {
    this._logger.error(message);
  }
}

export const logger = new Logger();
