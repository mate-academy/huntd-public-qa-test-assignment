import { test } from '@tests/_fixtures/fixtures';
import { CandidatePages } from "@/ui/composite/CandidatePages";
import { SPECIALIZATIONS, TECHNOLOGIES, POSITIONS } from "@/common/testData/profile/candidateProfile";

const { juniorQa } = POSITIONS;
const { qa } = SPECIALIZATIONS;
const { react, node, express, angular, vue } = TECHNOLOGIES;

let pages: CandidatePages;
test.beforeEach(async ({
  page,
  newUser,
  authGqlClientInBrowserContext,
}) => {

  await authGqlClientInBrowserContext.signUpUser(
    newUser.email,
    newUser.password,
    newUser.password,
  );

  pages = new CandidatePages(page);
});

test('should allow candidate to save speciality in profile', async ({}) => {
  await pages.editSpecialization.visit();

  await pages.editSpecialization.form.fillPosition(juniorQa);
  await pages.editSpecialization.form.selectSpecialization(qa);
  await pages.editSpecialization.form.addMultipleTechnologies( [react, node, express, angular, vue]);
  await pages.editSpecialization.form.clickSaveAndContinue();

  await pages.editJobExpectations.assertOpened();
});
