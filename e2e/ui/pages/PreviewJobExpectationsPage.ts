import { Page, expect } from '@playwright/test';

export class PreviewJobExpectationsPage {
  readonly page: Page;

  // Селекторы элементов с отображённой информацией
  readonly expectedSalaryText = '#expectedSalaryPreview';
  readonly jobTypeText = '#jobTypePreview';
  readonly relocationText = '#relocationPreview';

  constructor(page: Page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto('/profile/candidate/job-expectations/preview');
    await expect(this.page).toHaveURL(/\/profile\/candidate\/job-expectations\/preview/);
  }

  async assertJobExpectationsVisible(expected: { expectedSalary: string; jobType: string; relocation: boolean; }) {
    await expect(this.page.locator(this.expectedSalaryText)).toHaveText(expected.expectedSalary);
    await expect(this.page.locator(this.jobTypeText)).toHaveText(expected.jobType);
    await expect(this.page.locator(this.relocationText)).toHaveText(expected.relocation ? 'Yes' : 'No'); // Пример текста
  }
}
