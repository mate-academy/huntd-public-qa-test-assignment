import { Page } from '@playwright/test';
import { DropDownField } from "@/ui/components/elements/DropDownField";
import { test } from "@tests/_fixtures/fixtures";
import { BaseProfileForm } from "@/ui/components/candidateProfileForms/BaseProfileForm";

export class SpecialityProfileForm extends BaseProfileForm {

  public readonly specializationDropDown: DropDownField;

  public readonly technologiesDropDown: DropDownField;

  private readonly desiredPositionField =
    this.page.getByTestId('position');

  private readonly technologiesField =
    this.page.getByTestId('technologies');

  constructor(page: Page) {
    super(page);
    this.specializationDropDown = new DropDownField(page);
    this.technologiesDropDown = new DropDownField(page);
  }

  async fillPosition(position: string): Promise<void> {
    await test.step('Fill the Desired position input field', async () => {
      await this.desiredPositionField.fill(position);
    });
  }

  async selectSpecialization(specialization: string): Promise<void> {
    await test.step('Fill the Specialization drop-down field', async () => {
      await this.specializationDropDown.clickPlusIcon(this.form);
      await this.specializationDropDown.selectOption(specialization);
      await this.specializationDropDown.clickMinusIcon(this.form);
    });
  }

  async addMultipleTechnologies(technologies: string[]): Promise<void> {
    await test.step('Fill the Technologies multi-value field', async () => {
      for (const technology of technologies) {
        await this.technologiesField.fill(technology);
        await this.technologiesDropDown.selectOption(technology);
      }
    });
  }
}
