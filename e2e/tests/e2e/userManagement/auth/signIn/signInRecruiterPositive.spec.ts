import { test } from '@tests/_fixtures/fixtures';
import { PublicPages } from '@/ui/composite/PublicPages';
import { RecruiterPages } from "@/ui/composite/RecruiterPages";

let publicPages: PublicPages;
let recruiterPages: RecruiterPages;

test.beforeEach(async ({
  page,
  newUser,
  gqlClientInRequestContext,
}) => {

  await gqlClientInRequestContext.auth.signUpUser(
    newUser.email,
    newUser.password,
    newUser.password,
  );

  publicPages = new PublicPages(page);
  recruiterPages = new RecruiterPages(page);
});

test('should allow to sign in existing user from landing and choose recruiter profile', async ({
  newUser,
}) => {
  await publicPages.landing.visit();
  await publicPages.landing.header.clickSignInLink();

  await publicPages.signIn.assertOpened();

  await publicPages.signIn.fillEmailField(newUser.email);
  await publicPages.signIn.fillPasswordField(newUser.password);
  await publicPages.signIn.clickSignInButton();

  await recruiterPages.chooseProfile.assertOpened();
  await recruiterPages.chooseProfile.clickRecruiterLink();

  await recruiterPages.editProfile.assertOpened();
});
