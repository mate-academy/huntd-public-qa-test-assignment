import { Page } from "@playwright/test";
import { ChooseProfilePage } from "@/ui/pages/ChooseProfilePage";

export class PrivatePages {
  public chooseProfile: ChooseProfilePage;
  constructor(page: Page) {
    this.chooseProfile = new ChooseProfilePage(page);
  }
}
