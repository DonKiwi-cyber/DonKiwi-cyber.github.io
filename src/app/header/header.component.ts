import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  name : string = "Ian Carlo";
  titulos : string = "ninguno";
  objetivo : string = "convertirnme en project manager";
  foto : string = "gs://mycv-f4d5d.appspot.com/damn_bro.jpg";
  email : string = "zS21004532@estudiantes.uv.mx";
  celular : string = "(272) 135 6455";
  ubicacion : string = "Orizaba Veracruz";
  redsocial : string = "Ian Pico";
}
