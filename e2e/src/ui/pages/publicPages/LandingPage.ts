import { BasePage } from '@/ui/pages/BasePage';
import { Page } from "@playwright/test";
import { ROUTES } from "@/ui/constants";
import { LandingHeader } from "@/ui/components/LandingHeader";

export class LandingPage extends BasePage {
  url: string;

  public header: LandingHeader;

  constructor(page: Page) {
    super(page);
    this.url = ROUTES.landing;
    this.header = new LandingHeader(page);
  }

}
