import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  constructor(private workExperienceService: WorkExperienceService)
  {}

  arreglo: any = []
  

  ngOnInit() : void {
    this.workExperienceService.getHeader()
    .subscribe((data: any) => {
	    console.log(data);
	    // alert(data);
      this.arreglo = data;
      console.log(this.arreglo)
    });
  }

}
