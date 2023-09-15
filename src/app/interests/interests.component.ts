import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../services/interests.service'

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit{
  constructor(private interestsService: InterestsService)
  {}

  arreglo: any = []

  ngOnInit() : void {
    this.interestsService.getHeader()
    .subscribe((data: any) => {
	    console.log(data);
	    // alert(data);
      this.arreglo = data;
      console.log(this.arreglo)
    });
  }
}
