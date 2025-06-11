// файл: ../pages/EditJobExpectationsPage.ts
import { Page, expect } from '@playwright/test';

export class EditJobExpectationsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto('/profile/candidate/job-expectations');
  }

  async fillJobExpectations(data: { expectedSalary: string; jobType: string; relocation: boolean }) {
    await this.page.fill('input[name="expectedSalary"]', data.expectedSalary);
    await this.page.selectOption('select[name="jobType"]', data.jobType);
    if (data.relocation) {
      await this.page.check('input[name="relocation"]');
    } else {
      await this.page.uncheck('input[name="relocation"]');
    }
  }

  async submit() {
    await this.page.click('button[type="submit"]');
    // можно добавить ожидание навигации или появления успешного сообщения
    await this.page.waitForLoadState('networkidle');
  }
}
