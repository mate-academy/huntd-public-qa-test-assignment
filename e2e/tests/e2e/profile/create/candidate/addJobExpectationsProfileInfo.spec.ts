import { test } from '@tests/_fixtures/fixtures';
import { CandidatePages } from "@/ui/composite/CandidatePages";
import { Cities } from '@/common/typedefs/cities.typedefs';

const { Kyiv } = Cities;

let pages: CandidatePages;
test.beforeEach(async ({
  page,
  newUser,
  gqlClientInBrowserContext,
}) => {
  await gqlClientInBrowserContext.auth.signUpUser(
    newUser.email,
    newUser.password,
    newUser.password,
  );

  pages = new CandidatePages(page);
});

test('should allow candidate to save job expectations in profile', async ({}) => {
  await pages.editJobExpectations.visit();
});
