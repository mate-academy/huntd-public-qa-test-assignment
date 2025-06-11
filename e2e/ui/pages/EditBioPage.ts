import { Page, expect } from '@playwright/test';

export class EditBioPage {
  readonly page: Page;
  readonly bioTextarea = '#bio';
  readonly submitButton = 'button[type="submit"]';

  constructor(page: Page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto('/profile/candidate/bio');
    await expect(this.page).toHaveURL(/\/profile\/candidate\/bio/);
  }

  async fillBio(bioText: string) {
    await this.page.fill(this.bioTextarea, bioText);
  }

  async submit() {
    await this.page.click(this.submitButton);
  }
}
