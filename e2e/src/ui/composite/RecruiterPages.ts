import { Page } from "@playwright/test";
import { PrivatePages } from "@/ui/composite/PrivatePages";
import { RecruiterEditProfilePage } from "@/ui/pages/recruiterPages/RecruiterEditProfilePage";

export class RecruiterPages extends PrivatePages {
  public editProfile: RecruiterEditProfilePage;
  constructor(page: Page) {
    super(page);
    this.editProfile = new RecruiterEditProfilePage(page);
  }
}
