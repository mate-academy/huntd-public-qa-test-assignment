import { test } from '@tests/_fixtures/fixtures';
import { PublicPages } from '@/ui/composite/PublicPages';
import { RecruiterPages } from "@/ui/composite/RecruiterPages";

let publicPages: PublicPages;
let recruiterPages: RecruiterPages;

test.beforeEach(({ page}) => {
  publicPages = new PublicPages(page);
  recruiterPages = new RecruiterPages(page)
});

test('should allow to sign up new recruiter user from landing', async ({
  newUser,
}) => {
  await publicPages.landing.visit();
  await publicPages.landing.header.clickSignUpLink();

  await publicPages.signUp.assertOpened();

  await publicPages.signUp.fillEmailField(newUser.email);
  await publicPages.signUp.fillPasswordField(newUser.password);
  await publicPages.signUp.fillRepeatPasswordField(newUser.password);
  await publicPages.signUp.clickCreateAccountButton();

  await recruiterPages.chooseProfile.assertOpened();
  await recruiterPages.chooseProfile.clickRecruiterLink();

  await recruiterPages.editProfile.assertOpened();
});
