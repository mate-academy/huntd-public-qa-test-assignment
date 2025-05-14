import { mergeTests } from '@playwright/test';
import { test as userTest } from '@tests/_fixtures/fixturesUser';
import { test as genericTest } from '@tests/_fixtures/fixturesGeneric';
import { test as apiClientsTest } from '@tests/_fixtures/fixturesApiClients';
import { test as profileTest } from '@tests/_fixtures/fixturesProfile';
export const test = mergeTests(
  userTest,
  genericTest,
  apiClientsTest,
  profileTest,
  );

export { expect } from '@playwright/test';
