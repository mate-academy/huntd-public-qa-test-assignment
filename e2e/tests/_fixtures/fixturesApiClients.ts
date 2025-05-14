import { test as base } from '@playwright/test';
import { Logger } from '@/common/logger/Logger';
import { ApiClientPlaywright } from "@/api/ApiClientPlaywright";
import { AuthGqlAPI } from "@/api/graphql/AuthGqlAPI";
import { request as requestContext } from '@playwright/test';

export const test = base.extend<{
  addAllureTestHierarchy: string;
  apiClientInBrowserContext: ApiClientPlaywright;
  apiClientInRequestContext: ApiClientPlaywright;
  authGqlClientInBrowserContext: AuthGqlAPI;
  authGqlClientInRequestContext: AuthGqlAPI;
}, {
  logger: Logger;
  }>({
  apiClientInBrowserContext: async ({ page, logger }, use) => {
    const apiClient = new ApiClientPlaywright({
      logger,
      request: page.request,
    });

    await use(apiClient);
  },
  apiClientInRequestContext: async ({ request, logger }, use) => {
    const apiRequest = await requestContext.newContext();

    const apiClient = new ApiClientPlaywright({
      logger,
      request: apiRequest,
    });

    await use(apiClient);
  },
  authGqlClientInBrowserContext: async ({ apiClientInBrowserContext }, use) => {
    const authGqlAPI = new AuthGqlAPI(apiClientInBrowserContext);

    await use(authGqlAPI);
  },
  authGqlClientInRequestContext: async ({ apiClientInRequestContext }, use) => {
    const authGqlAPI = new AuthGqlAPI(apiClientInRequestContext);

    await use(authGqlAPI);
  },
});
