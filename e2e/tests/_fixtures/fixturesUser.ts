import { test as base } from '@playwright/test';
import { User } from '@/factoryItems/User';
import { CandidatePages } from '@/ui/composite/CandidatePages';

export const test = base.extend<{
  newUser: User,
  candidatePages: CandidatePages;
}>({
  newUser: async ({}, use) => {
    const user = new User();

    await use(user);
  },
});
