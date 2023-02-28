import type { HttpContentType, HttpMethod } from '../../enums';

type Methods = `${HttpMethod}`;

interface HeadersOptions {
  contentType?: HttpContentType;
  needAuth?: boolean;
}

export interface IRequestBase {
  url: string;
  headers?: HeadersOptions;
}

export interface ISetRequestOptions {
  method: Methods;
  contentType?: HttpContentType;
  body?: unknown;
  needAuth?: boolean;
}

export interface IGetRequest extends IRequestBase {}

export interface IRequestWithData extends IRequestBase {
  body: Record<string, unknown> | FormData;
}

//TODO: get and delete
