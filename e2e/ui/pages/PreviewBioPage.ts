import { Page, expect } from '@playwright/test';

export class PreviewBioPage {
  readonly page: Page;
  readonly bioText = '#bioPreview';

  constructor(page: Page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto('/profile/candidate/bio/preview');
    await expect(this.page).toHaveURL(/\/profile\/candidate\/bio\/preview/);
  }

  async assertBioVisible(expectedBio: string) {
    await expect(this.page.locator(this.bioText)).toHaveText(expectedBio);
  }
}
