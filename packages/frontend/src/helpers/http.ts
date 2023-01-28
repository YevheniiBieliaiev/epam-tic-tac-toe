import {
  ApiRoutes,
  AuthSubRoutes,
  HttpError,
  HttpStatusCode,
  type IResponseUpdateTokens,
} from '@tic-tac-toe/shared';
import { HttpMethod, HttpHeaders, HttpContentType } from '@enums';
import type {
  ISetRequestOptions,
  RequestWithData,
  //IRequestBase,
  ErrorResponse,
} from '@interfaces';
import { store, setAccessToken } from '@store';

class Http {
  private _apiUrl: string;

  private _setRequestOptions({
    method,
    contentType = HttpContentType.APPLICATION_JSON,
    body,
    needAuth,
  }: ISetRequestOptions): RequestInit {
    const requestHeaders: HeadersInit = {};

    const fetchOptions: RequestInit = {
      method,
      headers: requestHeaders,
    };

    if (needAuth) {
      requestHeaders[HttpHeaders.AUTHORIZATION] = `Bearer ${
        store.getState().auth.accessToken
      }`;
    }

    if (body && contentType === HttpContentType.APPLICATION_JSON) {
      requestHeaders[HttpHeaders.CONTENT_TYPE] = contentType;
      fetchOptions.body = JSON.stringify(body);
    }

    //TODO: AWS, be service, fe FC
    if (body && contentType === HttpContentType.MULTIPART_FORM_DATA) {
      fetchOptions.body = body as BodyInit;
    }

    return fetchOptions;
  }

  private async _updateAccessTokens(): Promise<void> {
    const response = await fetch(
      `${this._apiUrl + ApiRoutes.USER + AuthSubRoutes.REFRESH_TOKEN}`,
      {
        method: HttpMethod.POST,
      },
    );
    const resStatus = response.status;

    if (!response.ok) {
      const message: ErrorResponse = await response.json();
      store.dispatch(setAccessToken({ accessToken: null }));
      //TODO: reset redux store
      throw new HttpError({
        status: resStatus,
        message: message.error,
      });
    }

    const { accessToken } = (await response.json()) as IResponseUpdateTokens;
    store.dispatch(setAccessToken({ accessToken }));
  }

  private async _makeRequest<T = unknown>(
    url: string,
    options: RequestInit,
  ): Promise<T> {
    const apiUrl = `${this._apiUrl}${url}`;
    let response = await fetch(apiUrl, options);
    let resStatus = response.status;

    if (response.status === HttpStatusCode.UNAUTHORIZED) {
      try {
        await this._updateAccessTokens();

        const updatedOptions = this._setRequestOptions({
          method: options.method as HttpMethod,
          needAuth: true,
          body: options?.body,
          contentType: options.headers[HttpHeaders.CONTENT_TYPE],
        });

        response = await fetch(apiUrl, updatedOptions);
        resStatus = response.status;
      } catch {
        const message: ErrorResponse = await response.json();
        throw new HttpError({
          status: resStatus,
          message: message.error,
        });
      }
    }

    if (!response.ok) {
      const message: ErrorResponse = await response.json();
      throw new HttpError({
        status: resStatus,
        message: message.error,
      });
    }

    return response.json() as Promise<T>;
  }

  constructor(apiUrl: string) {
    this._apiUrl = apiUrl;
  }
  //TODO: method get
  // public get({ url, headers }: IRequestBase) {}

  public post<T>({ url, body, headers }: RequestWithData) {
    const fetchOptions = this._setRequestOptions({
      method: HttpMethod.POST,
      body,
      contentType: headers?.contentType,
      needAuth: headers?.needAuth,
    });

    return this._makeRequest<T>(url, fetchOptions);
  }

  public put<T>({ url, body, headers }: RequestWithData) {
    const fetchOptions = this._setRequestOptions({
      method: HttpMethod.PUT,
      body,
      contentType: headers?.contentType,
      needAuth: true,
    });

    return this._makeRequest<T>(url, fetchOptions);
  }
  //TODO: method delete
  //public delete() {}
}

export const http = new Http(process.env.REACT_PUBLIC_API_URL);
