import { TestBed } from '@angular/core/testing';

import { SkillsCompetencesService } from './skills-competences.service';

describe('SkillsCompetencesService', () => {
  let service: SkillsCompetencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsCompetencesService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
