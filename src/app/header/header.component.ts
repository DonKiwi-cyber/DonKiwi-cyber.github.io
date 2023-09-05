import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService : HeaderService)
  {}

  name : string = "fake";
  titulos : string = "fake";
  objetivo : string = "fake";
  foto : string = "fake";
  email : string = "fake";
  celular : string = "fake";
  ubicacion : string = "fake";
  facebook : string = "fake";

  ngOnInit() : void {
    this.headerService.getHeader()
    .subscribe((data: any) => {
	console.log(data);
	// alert(data);
	this.name = data.name;
	this.titulos = data.titulos;
	this.objetivo = data.objetivo;
	this.foto = data.foto;
	this.email = data.email;
	this.celular = data.celular;
	this.ubicacion = data.ubicacion;
	this.facebook = data.facebook;
    });
  }
}
