import { test, Locator } from '@playwright/test';
import { DropDownField } from '@/ui/components/elements/DropDownField';
import { Cities } from '@/common/typedefs/cities.typedefs';

export class LocationDropDownField extends DropDownField {

  private getLocationOption(option: string): Locator {
    return this.page.locator('.pac-item').filter({
      hasText: option,
    });
  }
  async selectOption(option: string): Promise<void> {
    await test.step(`Click on the required option ${option}`, async () => {
      await this.selectDropdownOption.filter({ hasText: option }).click();
    });
  }

  async selectLocationOption(option: Cities | string): Promise<void> {
    await test.step('Click on location option', async () => {
      await this.getLocationOption(option).first().click();
    });
  }
}
