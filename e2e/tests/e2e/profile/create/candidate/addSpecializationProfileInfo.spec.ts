import { test } from '@tests/_fixtures/fixtures';
import { CandidatePages } from "@/ui/composite/CandidatePages";
import { POSITIONS } from "@/common/testData/profile/candidateProfile";

const { juniorQa } = POSITIONS;

let pages: CandidatePages;
let specialization: string;
let technologiesList: string[];

test.beforeEach(async ({
  page,
  newUser,
  gqlClientInBrowserContext,
  specializations,
                         technologies,
}) => {

  await gqlClientInBrowserContext.auth.signUpUser(
    newUser.email,
    newUser.password,
    newUser.password,
  );

  specialization = specializations[0][0];
  technologiesList = technologies[0].slice(0, 6);

  pages = new CandidatePages(page);
});

test.only('should allow candidate to save speciality in profile', async ({}) => {
  await pages.editSpecialization.visit();

  await pages.editSpecialization.form.fillPosition(juniorQa);
  await pages.editSpecialization.form.selectSpecialization(specialization);
  await pages.editSpecialization.form.addMultipleTechnologies(technologiesList);
  await pages.editSpecialization.form.clickSaveAndContinue();

  await pages.editJobExpectations.assertOpened();
});
