import { BasePage } from "@/ui/pages/BasePage";
import { Page } from "@playwright/test";
import { ROUTES } from "@/ui/constants";
import { expect, test } from '@tests/_fixtures/fixtures';

export class SignUpPage extends BasePage {
  url: string;

  private readonly emailField = this.page.getByTestId('email');

  private readonly passwordField = this.page.getByTestId('password');

  private readonly repeatPasswordField = this.page.getByTestId('repeatPassword');

  private readonly createAccountButton =
    this.page.getByRole('button', { name: 'Create account'});


  constructor(page: Page) {
    super(page);
    this.url = ROUTES.signUp;
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

  async fillRepeatPasswordField(email: string): Promise<void> {
    await test.step('Fill the Repeat Password field', async () => {
      await this.repeatPasswordField.fill(email);
    });
  }

  async clickCreateAccountButton(): Promise<void> {
    await test.step('Click "Create account" ', async () => {
      await this.createAccountButton.click();
    });
  }
}
