import { Page, expect } from '@playwright/test';

export class EditExperiencePage {
  readonly page: Page;
  
  readonly companyNameInput = '#companyName';
  readonly positionInput = '#position';
  readonly yearsInput = '#years';
  readonly submitButton = 'button[type="submit"]';

  constructor(page: Page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto('/profile/candidate/experience');
    await expect(this.page).toHaveURL(/\/profile\/candidate\/experience/);
  }

  async fillExperience(data: { companyName: string; position: string; years: number }) {
    await this.page.fill(this.companyNameInput, data.companyName);
    await this.page.fill(this.positionInput, data.position);
    await this.page.fill(this.yearsInput, data.years.toString());
  }

  async submit() {
    await this.page.click(this.submitButton);
  }
}
