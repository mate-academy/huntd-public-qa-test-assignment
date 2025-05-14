import { BasePage } from "@/ui/pages/BasePage";
import { Page } from "@playwright/test";
import { ROUTES } from "@/ui/constants";
import { expect, test } from '@tests/_fixtures/fixtures';

export class ChooseProfilePage extends BasePage {
  url: string;

  private readonly candidateLink = this.page.getByRole('link').filter({ hasText: 'Candidate' });


  private readonly recruiterLink = this.page.getByRole('link').filter({ hasText: 'Recruiter' });

  constructor(page: Page) {
    super(page);
    this.url = ROUTES.chooseProfile;
  }

  async clickCandidateLink(): Promise<void> {
    await test.step(`Click the Candidate link`, async () => {
      await this.candidateLink.click();
    });
  }

  async clickRecruiterLink(): Promise<void> {
    await test.step(`Click the Recruiter link`, async () => {
      await this.recruiterLink.click();
    });
  }
}
