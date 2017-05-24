import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html'
})
export class SearchResultComponent implements OnInit {

  heroesArr:any[] = [];
  cadena:string;
  results:boolean = true;

  constructor( private activatedRoute:ActivatedRoute, private _heroesService:HeroesService ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroesArr = this._heroesService.buscarHeroe(params['termino']);
      this.cadena = params['termino'];
      console.log(this.heroesArr.length);
    });
  }

}
