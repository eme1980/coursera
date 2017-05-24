import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid #D9534F;
    }
    `]
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
    codigo: "ESP",
    nombre: "España"
  },
  {
    codigo: "ITA",
    nombre: "Italia"
  }]

  sexos:string[] = ["Hombre", "Mujer"]

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm) {
    console.log("Formulario posteado");
    console.log("ngForm", forma);
    console.log("valor forma", forma.value);
    console.log("Usuario", this.usuario);
  }

}
