import { Page } from '@playwright/test';
import { BaseComponent } from "@/ui/components/BaseComponent";

export class BaseHeader extends BaseComponent {
  constructor(page: Page) {
    super(page);
  }
}
