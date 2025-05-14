import { Page } from '@playwright/test';
import { BaseHeader } from "@/ui/components/BaseHeader";
import { test } from "@tests/_fixtures/fixtures";

export class LandingHeader extends BaseHeader {

  private readonly signUpLink =
    this.page.getByRole('link', { name: 'Sign up' });

  private readonly signInLink =
    this.page.getByRole('link', { name: 'Sign in' });

  constructor(page: Page) {
    super(page);
  }

  async clickSignUpLink(): Promise<void> {
    await test.step('Click "Sign up" link', async () => {
      await this.signUpLink.click();
    });
  }

  async clickSignInLink(): Promise<void> {
    await test.step('Click "Sign in" link', async () => {
      await this.signInLink.click();
    });
  }
}
