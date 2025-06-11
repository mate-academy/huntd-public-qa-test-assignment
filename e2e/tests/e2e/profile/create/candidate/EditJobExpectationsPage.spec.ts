import { Page, expect } from '@playwright/test';

export class EditJobExpectationsPage {
  readonly page: Page;


  readonly expectedSalaryInput = '#expectedSalary'; 
  readonly jobTypeSelect = '#jobType';              
  readonly relocationCheckbox = '#relocation';      
  readonly submitButton = 'button[type="submit"]';  
  constructor(page: Page) {
    this.page = page;
  }

  
  async visit() {
    await this.page.goto('/profile/candidate/job-expectations');
    await expect(this.page).toHaveURL(/\/profile\/candidate\/job-expectations/);
  }

  
  async fillJobExpectations(data: { expectedSalary: string; jobType: string; relocation: boolean; }) {
    await this.page.fill(this.expectedSalaryInput, data.expectedSalary);

    
    await this.page.selectOption(this.jobTypeSelect, { label: data.jobType });

    
    const isChecked = await this.page.isChecked(this.relocationCheckbox);
    if (data.relocation !== isChecked) {
      await this.page.click(this.relocationCheckbox);
    }
  }

  
  async submit() {
    await Promise.all([
      this.page.waitForNavigation({ url: /profile\/candidate\/job-expectations/ }),
      this.page.click(this.submitButton),
    ]);
  }
}
