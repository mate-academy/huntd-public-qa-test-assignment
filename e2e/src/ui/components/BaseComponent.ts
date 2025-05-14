import { Page } from '@playwright/test';
import { test } from "@tests/_fixtures/fixtures";

export abstract class BaseComponent {
  page: Page;

  protected constructor(page: Page) {
    this.page = page;
  }

  async pressKeyboardEnter(delay = 0): Promise<void> {
    await test.step(`Press [Enter]`, async () => {
      await this.page.keyboard.press('Enter', { delay });
    });
  }
}
