import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  pistas:any = [];

  constructor(private activatedRoute:ActivatedRoute, private _spotifyService:SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params.map(parametros => parametros['id']).subscribe(id => {
      this._spotifyService.getArtistaById(id).subscribe(response => this.artista = response);
      this._spotifyService.getArtistTopTracks(id).subscribe(response => this.pistas = response);
    })
  }

}
