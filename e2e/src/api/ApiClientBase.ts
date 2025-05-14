import { APIRequestContext, APIResponse } from '@playwright/test';
import { Logger } from '@/common/logger/Logger';

export type HTTPClient = APIRequestContext;

export type HttpClientResp = APIResponse;

export abstract class ApiClientBase {
  request: HTTPClient;

  logger: Logger;

  url: string;

  abstract get(
    url: string,
    options?: Record<string, unknown>,
  ): Promise<HttpClientResp>;

  abstract post(
    url: string,
    options?: Record<string, unknown>,
  ): Promise<HttpClientResp>;

  abstract delete(
    url: string,
    options?: Record<string, unknown>,
    skipStep?: boolean,
  ): Promise<HttpClientResp>;

  abstract update(
    url: string,
    options?: Record<string, unknown>,
    skipStep?: boolean,
  ): Promise<HttpClientResp>;

  abstract assertStatusCode(
    response: HttpClientResp,
    statusCode: number,
  ): void;

  abstract parseResponseJSON(
    response: HttpClientResp,
  ): Promise<any>;

  sendingLogMessage(requestType: string, url: string): string {
    return `<=== Sending ${requestType} on ${url}`;
  }

  receivedLogMessage(requestType: string, url: string): string {
    return `<=== Received response from ${requestType} on ${url}`;
  }
}
