import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre:string='Marcelo'
  genero:string='masuclino'

  invitacionMap={
    'masuclino':'invitarlo',
    'femenino':'invitarla'
  }



  clientes: string[]=['Maria','Pedro','Juan','s','s','f']
  clientesmap={
    '=0':'No tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  }

  public cambiarPersona(){
    this.nombre='Andrea'
    this.genero='femenino'
  }
  public borrarPersona(){
    this.clientes.pop();
  }



  //keyvaluepipe


  persona={
    nombre:'marcelo',
    edad: 35,
    direccion: 'palestina'
  }

  heroes=[
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {
      nombre:'Acuaman',
      vuela:false
    },
  ]

  //Async
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Se encontro la data')
    },3500)
  })


}
