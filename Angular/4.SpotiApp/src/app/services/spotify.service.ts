import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any [] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists/";

  constructor(private http:Http) { }

  getArtistas( termino:string ) {
    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;
    return this.http.get(url).map(response => {
      // console.log(response.json().artists.items);
      this.artistas = response.json().artists.items;
      console.log(this.artistas);
      return this.artistas;
    })
  }

  getArtistaById(id:string) {
    return this.http.get(this.urlArtista+id).map(response => {
      console.log(response.json());
      return response.json();
    })
  }

  getArtistTopTracks(id:string) {
    return this.http.get(this.urlArtista+id+'/top-tracks?country=ES').map(response => {
      console.log(response.json().tracks);
      return response.json().tracks;
    })
  }
}
