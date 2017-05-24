import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nomLista:string = "";
  nomItem:string;
  items:ListaItem[] = [];

  constructor(public alertCtrl: AlertController, public navCtrl:NavController, public _listaDeseos:ListaDeseosService) {  }

  ngOnInit() {

  }

  agregar() {
    if(this.nomItem.length == 0) {
      return;
    }

    let item = new ListaItem(); // Creo un nuevo objeto de la clase ListaItem
    item.nombre = this.nomItem; // Le asigno el nombre le pasaré con ngModal

    this.items.push(item); // Agrego el elemento item al array de items
    this.nomItem = ""; // Limpio el nomItem para agregar más
  }

  borrarItem(id:number) {
    this.items.splice(id, 1);
  }

  guardarLista () {
    if(this.nomLista.length == 0) {
      let alert = this.alertCtrl.create({
        title: 'Something went wrong',
        subTitle: 'List name is mandatory!',
        buttons: ['OK']
      });
      alert.present();
      return;
    }else{
      let lista = new Lista(this.nomLista);
      lista.items = this.items;
      console.log(lista.items);
      // this._listaDeseos.listas.push(lista);
      this._listaDeseos.agregarLista(lista);

      this.navCtrl.pop(); //vuelve a la pantalla principal
    }
  }
}
