import { test } from '@tests/_fixtures/fixtures';
import { PublicPages } from '@/ui/composite/PublicPages';
import { CandidatePages } from "@/ui/composite/CandidatePages";

let publicPages: PublicPages;
let candidatePages: CandidatePages;

test.beforeEach(({
  page,
}) => {
  publicPages = new PublicPages(page);
  candidatePages = new CandidatePages(page);
});

test('should allow to sign up new candidate user from landing', async ({
  newUser,
}) => {
  await publicPages.landing.visit();
  await publicPages.landing.header.clickSignUpLink();

  await publicPages.signUp.assertOpened();

  await publicPages.signUp.fillEmailField(newUser.email);
  await publicPages.signUp.fillPasswordField(newUser.password);
  await publicPages.signUp.fillRepeatPasswordField(newUser.password);
  await publicPages.signUp.clickCreateAccountButton();

  await candidatePages.chooseProfile.assertOpened();
  await candidatePages.chooseProfile.clickCandidateLink();

  await candidatePages.editSpecialization.assertOpened();
});

