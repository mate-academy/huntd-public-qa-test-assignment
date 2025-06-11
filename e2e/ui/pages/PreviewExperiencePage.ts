import { Page, expect } from '@playwright/test';

export class PreviewExperiencePage {
  readonly page: Page;

  readonly companyNameText = '#companyNamePreview';
  readonly positionText = '#positionPreview';
  readonly yearsText = '#yearsPreview';

  constructor(page: Page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto('/profile/candidate/experience/preview');
    await expect(this.page).toHaveURL(/\/profile\/candidate\/experience\/preview/);
  }

  async assertExperienceVisible(expected: { companyName: string; position: string; years: number }) {
    await expect(this.page.locator(this.companyNameText)).toHaveText(expected.companyName);
    await expect(this.page.locator(this.positionText)).toHaveText(expected.position);
    await expect(this.page.locator(this.yearsText)).toHaveText(expected.years.toString());
  }
}
