import { BasePage } from "@/ui/pages/BasePage";
import { Page } from "@playwright/test";
import { ROUTES } from "@/ui/constants";
import { JobExpectationsProfileForm } from "@/ui/components/candidateProfileForms/JobExpectationsProfileForm";

export class CandidateEditJobExpectationsPage extends BasePage {
  url: string;

  public form: JobExpectationsProfileForm;

  constructor(page: Page) {
    super(page);
    this.url = ROUTES.candidateEditJobExpectations;
    this.form = new JobExpectationsProfileForm(page);
  }

}
