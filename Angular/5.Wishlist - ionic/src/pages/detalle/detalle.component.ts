import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { PendientesComponent } from '../pendientes/pendientes.component';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx:number;
  lista:Lista;

  constructor(public navCtrl:NavController,
              public navParams:NavParams,
              public _listaDeseos:ListaDeseosService,
              public alertCtrl:AlertController) {
    this.idx = this.navParams.get("idx");
    this.lista = this.navParams.get("lista");
  }

  ngOnInit() {}

  actualizar(item:ListaItem) {
    
    item.completado = !item.completado;
    for (let i = 0; i < this.lista.items.length; i++) {
        if (!this.lista.items[i].completado) {
          this.lista.terminada = false;
          break;
        }else{
          this.lista.terminada = true;
        }
    }
    this._listaDeseos.actualizarData();
  }

  borrarLista() {
    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: 'Are you sure you want to delete the list?',
      buttons: [
        'Disagree',
        {
          text: 'Agree',
          handler: () => {
            this._listaDeseos.eliminarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}
