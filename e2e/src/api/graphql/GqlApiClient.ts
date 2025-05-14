import { test, expect } from '@playwright/test';
import { ApiClientBase, HttpClientResp } from '@/api/ApiClientBase';
import { ROUTES, STATUS_CODES } from '@/api/constants';

export interface PostGQLRequestOptions {
  url?: string;
  payload?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export class GqlApiClient {
  client: ApiClientBase;

  constructor(client: ApiClientBase) {
    this.client = client;
  }

  async postGQLRequest({
    payload,
    headers = {},
    url = ROUTES.apiGql,
  }: PostGQLRequestOptions): Promise<HttpClientResp> {
    const headerName = 'Content-Type';

    let response: HttpClientResp;

    await test.step('Send POST request', async () => {
      const options = {
        headers: {
          [headerName]: 'application/json; charset=utf-8',
          ...headers,
        },
        data: payload,
      };

      response = await this.client.post(url, options);
    });

    await this.assertResponseHasNoErrors(response);
    this.client.assertStatusCode(response, STATUS_CODES.success);

    return response;
  }

  async assertResponseHasNoErrors(response: HttpClientResp): Promise<void> {
    const responseBody = await this.client.parseResponseJSON(response);

    const hasNoErrors = responseBody?.errors === undefined;

    if (!hasNoErrors) {
      this.client.logger.error(`Response has errors: ${responseBody.errors}`);
    }

    expect(hasNoErrors).toEqual(true);
  }
}
