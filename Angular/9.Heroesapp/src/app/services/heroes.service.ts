import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import  { Router, ActivatedRoute } from "@angular/router";
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  heroesURL:string = "https://heroesapp-8e1d9.firebaseio.com/heroes.json";
  heroeURL:string = "https://heroesapp-8e1d9.firebaseio.com/heroes/";

  constructor( private http:Http, private router:Router ) {}

  nuevoHeroe( heroe:Heroe ) {
    let body = JSON.stringify(heroe); //paso el heroe a string JSON
    let headers = new Headers({       //aplico cabeceras
      'Content-type':'application/json'
    });

    return this.http.post( this.heroesURL, body, { headers } ).map(res=>{
      console.log(res.json());
      return res.json();
    })
  }

  actualizarHeroe( heroe:Heroe, key$:string ) {
    let body = JSON.stringify(heroe); //paso el heroe a string JSON
    let headers = new Headers({       //aplico cabeceras
      'Content-type':'application/json'
    });
    let updateURL = `${this.heroeURL}${key$}.json`;
    console.log(updateURL);

    return this.http.put( updateURL, body, { headers } ).map(res=>{
      console.log(res.json());
      return res.json();
    })
  }

  getHeroe(key$:string) {
    let getURL = `${this.heroeURL}${key$}.json`;
    return this.http.get(getURL).map(res=>res.json());
  }

  getHeroes() {
    return this.http.get(this.heroesURL).map(res=>res.json());
  }

  borrarHeroe(key$:string) {
    let url = `${ this.heroeURL }/${ key$ }.json`;
    return this.http.delete(url)
        .map(res=>res.json()); //transforma el resultado en una respuesta json
  }

}
