import { Page } from "@playwright/test";
import { SignUpPage } from "@/ui/pages/publicPages/SignUpPage";
import { LandingPage } from "@/ui/pages/publicPages/LandingPage";
import { SignInPage } from "@/ui/pages/publicPages/SignInPage";

export class PublicPages {
  public signUp: SignUpPage;
  public signIn: SignInPage;
  public landing: LandingPage;
  constructor(page: Page) {
    this.signUp = new SignUpPage(page);
    this.signIn = new SignInPage(page)
    this.landing = new LandingPage(page);
  }
}
