import { Page } from '@playwright/test';
import { BaseProfileForm } from "@/ui/components/candidateProfileForms/BaseProfileForm";

export class JobExpectationsProfileForm extends BaseProfileForm {

  constructor(page: Page) {
    super(page);
  }
}
