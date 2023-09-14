import { Component, OnInit } from '@angular/core';
import { SkillsCompetencesService } from '../services/skills-competences.service';

@Component({
  selector: 'app-skills-competences',
  templateUrl: './skills-competences.component.html',
  styleUrls: ['./skills-competences.component.css']
})

export class SkillsCompetencesComponent implements OnInit{

  constructor(private skillsCompetencesService : SkillsCompetencesService)
  {}

  arreglo: any = []

  ngOnInit() : void {
    this.skillsCompetencesService.getHeader()
    .subscribe((data: any) => {
	    console.log(data);
	    // alert(data);
      this.arreglo = data;
      console.log(this.arreglo)
    });
  }
}
