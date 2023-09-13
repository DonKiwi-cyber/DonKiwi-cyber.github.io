import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCompetencesComponent } from './skills-competences.component';

describe('SkillsCompetencesComponent', () => {
  let component: SkillsCompetencesComponent;
  let fixture: ComponentFixture<SkillsCompetencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsCompetencesComponent]
    });
    fixture = TestBed.createComponent(SkillsCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
