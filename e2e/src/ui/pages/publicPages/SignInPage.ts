import { BasePage } from "@/ui/pages/BasePage";
import { Page } from "@playwright/test";
import { ROUTES } from "@/ui/constants";
import { test } from '@tests/_fixtures/fixtures';

export class SignInPage extends BasePage {
  url: string;

  private readonly emailField = this.page.getByTestId('email');

  private readonly passwordField = this.page.getByTestId('password');

  private readonly signInButton =
    this.page.getByRole('button', { name: 'Sign In', exact: true });


  constructor(page: Page) {
    super(page);
    this.url = ROUTES.signIn;
  }

  async fillEmailField(email: string): Promise<void> {
    await test.step('Fill the Email field', async () => {
      await this.emailField.fill(email);
    });
  }

  async fillPasswordField(email: string): Promise<void> {
    await test.step('Fill the Password field', async () => {
      await this.passwordField.fill(email);
    });
  }

  async clickSignInButton(): Promise<void> {
    await test.step('Click "Sign in button" ', async () => {
      await this.signInButton.click();
    });
  }
}
