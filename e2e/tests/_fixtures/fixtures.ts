import { mergeTests } from '@playwright/test';
import { test as userTest } from '@tests/_fixtures/fixturesUser';
import { test as genericTest } from '@tests/_fixtures/fixturesGeneric';
import { test as apiClientsTest } from '@tests/_fixtures/fixturesApiClients';
export const test = mergeTests(
  userTest,
  genericTest,
  apiClientsTest,
  );

export { expect } from '@playwright/test';
