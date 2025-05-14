import { test as base } from '@playwright/test';
import { Logger, LogLevel } from '@/common/logger/Logger';
import * as allure from 'allure-js-commons';
import { parseTestTreeHierarchy } from '../../src/common/helpers/allureHelpers';
import { ApiClientPlaywright } from "@/api/ApiClientPlaywright";
import { AuthGqlAPI } from "@/api/graphql/AuthGqlAPI";

export const test = base.extend<{
  infoTestLog: string;
  addAllureTestHierarchy: string;
  apiClientInBrowserContext: ApiClientPlaywright;
  apiClientInRequestContext: ApiClientPlaywright;
  authGqlClientInBrowserContext: AuthGqlAPI;
  authGqlClientInRequestContext: AuthGqlAPI;
}, {
  logger: Logger;
  }>({
  logger: [
    async ({}, use) => {
      const logger = new Logger(LogLevel[process.env.LOG_LEVEL]);

      await use(logger);
    },
    { scope: 'worker' },
  ],
  infoTestLog: [
    async ({ logger }, use, testInfo) => {
      const indexOfTestSubfolderStart = testInfo.file.indexOf('/tests') + 7;
      const fileName = testInfo.file.substring(indexOfTestSubfolderStart);

      logger.debug(`Test started: ${fileName}`);

      await use('infoTestLog');

      logger.debug(`Test completed: ${fileName}`);
    },
    { scope: 'test', auto: true },
  ],
  addAllureTestHierarchy: [
    async ({ logger }, use, testInfo) => {
      const fileName = testInfo.file;

      const [parentSuite, suite, subSuite] = parseTestTreeHierarchy(
        fileName,
        logger,
      );

      await allure.parentSuite(parentSuite);
      await allure.suite(suite);
      if (subSuite) {
        await allure.subSuite(subSuite);
      }

      await use('addAllureTestHierarchy');
    },
    { scope: 'test', auto: true },
  ],
});
