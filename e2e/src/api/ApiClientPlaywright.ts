import { APIRequestContext, APIResponse } from '@playwright/test';
import { Logger } from '@/common/logger/Logger';
import { expect, test } from '@playwright/test';
import { ApiClientBase } from '@/api/ApiClientBase';
import { HTTP_METHODS } from '@/api/constants';

interface ClientOptions {
  request: APIRequestContext;
  logger: Logger;
  url?: string;
}

export class ApiClientPlaywright extends ApiClientBase {
  request: APIRequestContext;

  constructor(options: ClientOptions) {
    super();
    this.request = options.request;
    this.url = options.url || '';
    this.logger = options.logger;
  }

  async get(
    url: string,
    options?: Record<string, unknown>,
  ): Promise<APIResponse> {
    const fullUrl = this.getFullUrl(url);
    const get = HTTP_METHODS.GET;

    this.logger.logMessage(this.sendingLogMessage(get, fullUrl), options);

    const response = <APIResponse> await test.step(
      `Send ${get} request on url=${this.url}${url}`,
      async () => await this.request.get(
        `${this.url}${url}`,
        this.addMaxRetriesToOptions(options),
      ),
    );

    const body = await response.json();

    this.logger.logMessage(this.receivedLogMessage(get, fullUrl), body);

    return response;
  }

  async post(
    url: string,
    options?: Record<string, unknown>,
  ): Promise<APIResponse> {
    const fullUrl = this.getFullUrl(url);
    const post = HTTP_METHODS.POST;

    this.logger.logMessage(this.sendingLogMessage(post, fullUrl), options);

    const response = <APIResponse> await test.step(`Send ${post} request on url=${this.url}${url}`,
      async () => await this.request.post(
        `${this.url}${url}`,
        this.addMaxRetriesToOptions(options),
      ));

    let body = '';

    if ((await response.body()).length !== 0) {
      body = await response.json();
    }

    this.logger.logMessage(this.receivedLogMessage(post, fullUrl), body);

    return response;
  }

  async delete(
    url: string,
    options?: Record<string, unknown>,
    skipStep?: boolean,
  ): Promise<APIResponse> {
    const fullUrl = this.getFullUrl(url);
    const del = HTTP_METHODS.DELETE;
    let response: APIResponse;

    this.logger.logMessage(this.sendingLogMessage(del, fullUrl), options);

    const fullOptions = this.addMaxRetriesToOptions(options);

    if (skipStep) {
      response = <APIResponse> await this.request.delete(`${this.url}${url}`, fullOptions);
    } else {
      response = <APIResponse> await test.step(`Send ${del} request on url=${this.url}${url}`,
        async () => await this.request.delete(
          `${this.url}${url}`,
          fullOptions,
        ));
    }

    const body = await response.json();

    this.logger.logMessage(this.receivedLogMessage(del, fullUrl), body);

    return response;
  }

  async update(
    url: string,
    options?: Record<string, unknown>,
  ): Promise<APIResponse> {
    const fullUrl = this.getFullUrl(url);
    const put = HTTP_METHODS.PUT;

    this.logger.logMessage(this.sendingLogMessage(put, fullUrl), options);

    const response = <APIResponse> await test.step(`Send ${put} request on url=${this.url}${url}`,
      async () => await this.request.put(
        `${this.url}${url}`,
        this.addMaxRetriesToOptions(options),
      ));

    const body = await response.json();

    this.logger.logMessage(this.receivedLogMessage(put, fullUrl), body);

    return response;
  }

  addMaxRetriesToOptions(
    options: Record<string, unknown>,
  ): Record<string, unknown> {
    return {
      maxRetries: Number(process.env.MAX_RETRIES_ON_API) || 0,
      ...options,
    };
  }

  getFullUrl(url: string): string {
    return `${this.url || process.env.BASE_API_URL}${url}`;
  }

  assertStatusCode(
    response: APIResponse,
    statusCode: number,
  ): void {
    expect(response.status()).toEqual(statusCode);
  }

  async parseResponseJSON(
    response: APIResponse,
  ): Promise<any> {
    const text = await response.text();

    const trimmedResponse = text.trim();
    const isResponseEmpty = (
      trimmedResponse === ''
    );

    if (isResponseEmpty) {
      return null;
    }

    return JSON.parse(text);
  }
}
