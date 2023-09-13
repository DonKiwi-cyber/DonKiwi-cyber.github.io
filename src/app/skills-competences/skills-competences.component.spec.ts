import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCompetencesComponent } from './skills-competences.component';

import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SkillsCompetencesComponent', () => {
  let component: SkillsCompetencesComponent;
  let fixture: ComponentFixture<SkillsCompetencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsCompetencesComponent],
      imports : [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(SkillsCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
