import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any;
  loading:boolean = true;

  constructor( private _heroesService:HeroesService ) {
    this._heroesService.getHeroes().subscribe(data=>{
      console.log(data); //devuelve un objeto de objetos, no un array :(
      // for(let key$ in data) {
      //   console.log(data[key$]);
      //
      //   this.heroes.push(data[key$]);
      //
      //   let heroe = data[key$];
      //   heroe.key$ = key$;
      // }


      // this.loading = false;
      setTimeout(()=>{
        this.heroes = data;
        this.loading = false;
      },1000);
    })
  }

  ngOnInit() {
  }

  borraHeroe(key$:string) {
    this._heroesService.borrarHeroe(key$).subscribe(respuesta=>{
      if(respuesta) {
        console.error(respuesta) //si la eliminacion va bien, devuelve NULL
      }else{
        //todo esta bien
        delete this.heroes[key$]
      }
    })
  }

}
