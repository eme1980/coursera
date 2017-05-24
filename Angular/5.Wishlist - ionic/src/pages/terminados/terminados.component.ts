import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosService } from "../../app/services/lista-deseos.service";
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {
  constructor(private _listaDeseos:ListaDeseosService, private NavCtrl:NavController) {  }

  ngOnInit() {}

  irAgregar() {
    this.NavCtrl.push( AgregarComponent )
  }

  verDetalle(lista, idx) {
    this.NavCtrl.push( DetalleComponent, {
      lista:lista,
      idx:idx
    } )
  }
}
