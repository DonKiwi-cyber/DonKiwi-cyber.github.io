import { Component, OnInit } from '@angular/core';
import { AchievementsCertificatesService } from '../services/achievements-certificates.service';

@Component({
  selector: 'app-achievements-certificates',
  templateUrl: './achievements-certificates.component.html',
  styleUrls: ['./achievements-certificates.component.css']
})
export class AchievementsCertificatesComponent implements OnInit {

  constructor(private achievementsCertificatesService: AchievementsCertificatesService)
  {}

  arreglo: any = []
  

  ngOnInit() : void {
    this.achievementsCertificatesService.getHeader()
    .subscribe((data: any) => {
	    console.log(data);
	    // alert(data);
      this.arreglo = data;
      console.log(this.arreglo)
    });
  }

}
