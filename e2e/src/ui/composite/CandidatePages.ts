import { Page } from "@playwright/test";
import { CandidateEditSpecializationPage } from "@/ui/pages/candidatePages/CandidateEditSpecializationPage";
import { PrivatePages } from "@/ui/composite/PrivatePages";
import { CandidateEditJobExpectationsPage } from "@/ui/pages/candidatePages/CandidateEditJobExpectationsPage";

export class CandidatePages extends PrivatePages {
  public editSpecialization: CandidateEditSpecializationPage;
  public editJobExpectations: CandidateEditJobExpectationsPage;
  constructor(page: Page) {
    super(page);
    this.editSpecialization = new CandidateEditSpecializationPage(page);
    this.editJobExpectations = new CandidateEditJobExpectationsPage(page);
  }
}
