import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre = "Fernando";
  nombre2 =  "Miguel Perez GarcÍa"
  array = [1,2,3,4,5,6,7,8,9,10];
  PI:number = Math.PI;
  a:number = 0.234;
  salario:number = 1234.5;
  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion:{
      calle: "Primera",
      casa: "19"
    }
  };

  valorDePromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('Llegó la data!'),3500);
  });

  fecha = new Date();

  video:string ="b-I2s5zRbHg";

  mostrar:boolean = true;
}
