import { Page } from '@playwright/test';
import { expect, test } from '@tests/_fixtures/fixtures';

export abstract class BasePage {
  abstract url: string;

  page: Page;

  protected constructor(page: Page) {
    this.page = page;
  }

  async assertOpened(
    url?: string | RegExp,
    parameters?: Record<string, string>,
  ): Promise<void> {
    await test.step(`Assert ${this.pageName} page url is correct`, async () => {
      let urlToAssert = url ?? this.url;

      if (parameters && typeof urlToAssert === 'string') {
        urlToAssert = this.generateUrlWithParameters(urlToAssert, parameters);
      }

      await this.waitForUrl(urlToAssert);
      await expect(this.page).toHaveURL(urlToAssert);
    });
  }

  async waitForUrl(url: string | RegExp): Promise<void> {
    await test.step(`Wait for ${this.pageName} page to have expected URL`, async () => {
      await this.page.waitForURL(url);
    });
  }


  async goto(url?: string): Promise<void> {
  await test.step(`Go to ${this.pageName} page`, async () => {
    await this.page.goto(url || this.url, {
      waitUntil: 'networkidle', 
      timeout: 60000,           
    });
  });
}


  async visit(url?: string): Promise<void> {
    await test.step(`Visit ${this.pageName} page`, async () => {
      await this.goto(url || this.url);
      await this.assertOpened(url || this.url);
    });
  }

  async reload(shouldAssertOpened = true): Promise<void> {
    await test.step(`Reload ${this.pageName} page`, async () => {
      await this.page.reload();

      if (shouldAssertOpened) {
        await this.assertOpened();
      }
    });
  }

  get pageName(): string {
    return this.constructor.name.replace('Page', '');
  }

  generateUrlWithParameters(
    url: string,
    parameters: Record<string, string>,
  ): string {
    let newUrl = `${url}?`;

    newUrl += Object.keys(parameters).map(
      (key) => `${key}=${parameters[key]}&`,
    );

    return newUrl
      .slice(0, -1)
      .replace(',', '');
  }

  async pressKeyboardEnter(delay = 0): Promise<void> {
    await test.step(`Press [Enter]`, async () => {
      await this.page.keyboard.press('Enter', { delay });
    });
  }
}
