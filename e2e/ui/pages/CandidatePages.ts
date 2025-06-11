import { Page } from '@playwright/test';
import { EditJobExpectationsPage } from '../pages/EditJobExpectationsPage';
import { PreviewJobExpectationsPage } from '../pages/PreviewJobExpectationsPage';

export class CandidatePages {
  editJobExpectations: EditJobExpectationsPage;
  previewJobExpectations: PreviewJobExpectationsPage;

  constructor(page: Page) {
    this.editJobExpectations = new EditJobExpectationsPage(page);
    this.previewJobExpectations = new PreviewJobExpectationsPage(page);
  }
}
import { Page } from '@playwright/test';
import { EditJobExpectationsPage } from './EditJobExpectationsPage';
import { PreviewJobExpectationsPage } from './PreviewJobExpectationsPage';
import { EditExperiencePage } from './EditExperiencePage';
import { PreviewExperiencePage } from './PreviewExperiencePage';
import { EditBioPage } from './EditBioPage';
import { PreviewBioPage } from './PreviewBioPage';

export class CandidatePages {
  editJobExpectations: EditJobExpectationsPage;
  previewJobExpectations: PreviewJobExpectationsPage;
  editExperience: EditExperiencePage;
  previewExperience: PreviewExperiencePage;
  editBio: EditBioPage;
  previewBio: PreviewBioPage;

  constructor(page: Page) {
    this.editJobExpectations = new EditJobExpectationsPage(page);
    this.previewJobExpectations = new PreviewJobExpectationsPage(page);
    this.editExperience = new EditExperiencePage(page);
    this.previewExperience = new PreviewExperiencePage(page);
    this.editBio = new EditBioPage(page);
    this.previewBio = new PreviewBioPage(page);
  }
}
