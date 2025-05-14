import { Page } from '@playwright/test';
import { test } from "@tests/_fixtures/fixtures";
import { BaseComponent } from "@/ui/components/BaseComponent";

export abstract class BaseProfileForm extends BaseComponent {

  protected readonly form =
    this.page.locator('form');

  protected readonly saveButton =
    this.page.getByRole('button', { name: 'Save and continue' })

  protected constructor(page: Page) {
    super(page);
  }

  async clickSaveAndContinue(): Promise<void> {
    await test.step('Click "Save and Continue" button', async () => {
      await this.saveButton.click();
    });
  }
}
