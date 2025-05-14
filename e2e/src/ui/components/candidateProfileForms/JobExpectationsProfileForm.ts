import { Page } from '@playwright/test';
import { BaseProfileForm } from "@/ui/components/candidateProfileForms/BaseProfileForm";
import { test } from "@tests/_fixtures/fixtures";
import { LocationDropDownField } from "@/ui/components/elements/LocationDropDownField";

export class JobExpectationsProfileForm extends BaseProfileForm {

  public readonly locationDropDown: LocationDropDownField;

  private readonly locationField =
    this.page.getByTestId('location');

  constructor(page: Page) {
    super(page);
    this.locationDropDown = new LocationDropDownField(page);
  }

  async selectLocation(city: string): Promise<void> {
    await test.step("Select the Location", async () => {
      await this.locationField.fill(city);
      await this.locationDropDown.selectLocationOption(city);
    });
  }
}
