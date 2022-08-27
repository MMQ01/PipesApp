import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'marcelo'
  nombreUpper: string = 'MARCELO'
  nombreCompleto: string = 'MarCeLo'

  fecha: Date = new Date();

}
