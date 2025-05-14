import { BasePage } from "@/ui/pages/BasePage";
import { Page } from "@playwright/test";
import { ROUTES } from "@/ui/constants";
import { SpecialityProfileForm } from "@/ui/components/candidateProfileForms/SpecialityProfileForm";

export class CandidateEditSpecializationPage extends BasePage {
  url: string;

  public form: SpecialityProfileForm;

  constructor(page: Page) {
    super(page);
    this.url = ROUTES.candidateEditSpecialization;
    this.form = new SpecialityProfileForm(page);
  }

}
