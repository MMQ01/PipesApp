import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string ='marCelo morAles'
  valor:number = 1000

  obj={
    nombre: 'Marcelo'
  }
  cambiarNombre(){
   console.log(this.nombre);
   console.log(this.valor);
   

  }
}
