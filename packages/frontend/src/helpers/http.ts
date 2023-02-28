import {
  ApiRoutes,
  AuthSubRoutes,
  HttpError,
  HttpStatusCode,
  type IResponseLogin,
} from '@tic-tac-toe/shared';
import { HttpMethod, HttpHeaders, HttpContentType } from '@enums';
import type {
  ISetRequestOptions,
  IRequestWithData,
  IGetRequest,
  ErrorResponse,
} from '@interfaces';
import { store, setAccessToken } from '@store';

class Http {
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
      fetchOptions.body =
        typeof body === 'string' ? body : JSON.stringify(body);
    }

    //TODO: AWS, be service, fe FC
    if (body && contentType === HttpContentType.MULTIPART_FORM_DATA) {
      fetchOptions.body = body as BodyInit;
    }

    return fetchOptions;
  }

  private async _updateAccessTokens(): Promise<IResponseLogin> {
    const response = await fetch(
      `${ApiRoutes.USER + AuthSubRoutes.REFRESH_TOKEN}`,
      {
        method: HttpMethod.POST,
      },
    );
    const resStatus = response.status;

    if (!response.ok) {
      const message: ErrorResponse = await response.json();
      store.dispatch(setAccessToken({ accessToken: null }));

      throw new HttpError({
        status: resStatus,
        message: message.error,
      });
    }

    const data = (await response.json()) as IResponseLogin;
    store.dispatch(setAccessToken({ accessToken: data.accessToken }));

    return data;
  }

  private async _makeRequest<T = unknown>(
    url: string,
    options: RequestInit,
  ): Promise<T> {
    const apiUrl = url;
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

  //TODO: method get
  public get<T>({ url, headers }: IGetRequest) {
    const fetchOptions = this._setRequestOptions({
      method: HttpMethod.GET,
      needAuth: headers.needAuth,
    });

    return this._makeRequest<T>(url, fetchOptions);
  }

  public post<T>({ url, body, headers }: IRequestWithData) {
    const fetchOptions = this._setRequestOptions({
      method: HttpMethod.POST,
      body,
      contentType: headers?.contentType,
      needAuth: headers?.needAuth,
    });

    return this._makeRequest<T>(url, fetchOptions);
  }

  public put<T>({ url, body, headers }: IRequestWithData) {
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

  public setTokens() {
    return this._updateAccessTokens();
  }
}

export const http = new Http();
