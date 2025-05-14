import { test as base } from '@playwright/test';
import { Logger } from '@/common/logger/Logger';
import { ApiClientPlaywright } from "@/api/ApiClientPlaywright";
import { request as requestContext } from '@playwright/test';
import { GqlClient } from "@/api/graphql/GqlClient";

export const test = base.extend<{
  addAllureTestHierarchy: string;
  httpClientInBrowserContext: ApiClientPlaywright;
  httpClientInRequestContext: ApiClientPlaywright;
  gqlClientInBrowserContext: GqlClient;
  gqlClientInRequestContext: GqlClient;
}, {
  logger: Logger;
  }>({
  httpClientInBrowserContext: async ({ page, logger }, use) => {
    const apiClient = new ApiClientPlaywright({
      logger,
      request: page.request,
    });

    await use(apiClient);
  },
  httpClientInRequestContext: async ({ request, logger }, use) => {
    const apiRequest = await requestContext.newContext();

    const apiClient = new ApiClientPlaywright({
      logger,
      request: apiRequest,
    });

    await use(apiClient);
  },
  gqlClientInBrowserContext: async ({ httpClientInBrowserContext }, use) => {
    const client = new GqlClient(httpClientInBrowserContext)

    await use(client);
  },
  gqlClientInRequestContext: async ({ httpClientInRequestContext }, use) => {
    const client = new GqlClient(httpClientInRequestContext);

    await use(client);
  },
});
