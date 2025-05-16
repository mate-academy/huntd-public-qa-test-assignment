import { test, Locator, Page } from '@playwright/test';
import { BaseComponent } from '@/ui/components/BaseComponent';

export class DropDownField extends BaseComponent {
  public readonly selectDropdownOption = (
    this.page.locator('.select__option')
  );

  public getPlusIconForField(field: Locator | Page): Locator {
    return field.locator('.icon-plus');
  }

  public getMinusIconForField(field: Locator | Page): Locator {
    return field.locator('.icon-minus');
  }

  async selectOption(option: string): Promise<void> {
    await test.step(`Click on the required option ${option}`, async () => {
      await this.selectDropdownOption.filter({ hasText: option }).last().click();
    });
  }

  async clickPlusIcon(locator: Locator): Promise<void> {
    await test.step(`Click on '+' plus icon in the drop-down`, async () => {
      await this.getPlusIconForField(locator).click();
    });
  }

  async clickMinusIcon(locator: Locator): Promise<void> {
    await test.step(`Click on '-' minus icon in the drop-down`, async () => {
      await this.getMinusIconForField(locator).click();
    });
  }

}
