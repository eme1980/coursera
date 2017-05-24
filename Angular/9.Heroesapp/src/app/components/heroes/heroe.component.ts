import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import  { HeroesService } from "../../services/heroes.service";
import  { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  private heroe:Heroe = {
    nombre:"",
    casa:"Marvel",
    bio:""
  }

  nuevo:boolean = false;
  id:string = "";

  constructor(private _heroesService:HeroesService, private router:Router, private actRoute:ActivatedRoute) {
    this.actRoute.params.subscribe(parametros=>{
      this.id = parametros['id'];

      if (this.id==='nuevo') {
        this.nuevo = true;
      } else {
        this.nuevo = false;
      }

      if (!this.nuevo) {
        this._heroesService.getHeroe(this.id)
              .subscribe(data => {
                  console.log("esto es la data: ")
                  console.log(data);
                  this.heroe = data;
                })
      }
    })
  }

  ngOnInit() {
  }

  guardar() {
    if(this.nuevo) {
      console.log(this.heroe);
      this._heroesService.nuevoHeroe(this.heroe).subscribe(data=>{
        this.router.navigate(['/heroe',data.name]);
      },
      error=> console.error(error));
    } else {
      this._heroesService.actualizarHeroe(this.heroe, this.id).subscribe(data=>{
        console.log(this.heroe);
      },
      error=> console.error(error));
    }
  }

}
