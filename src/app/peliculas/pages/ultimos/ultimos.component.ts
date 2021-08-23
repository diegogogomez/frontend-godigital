import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula, Consulta } from '../../interfaces/peliculas.interface';

@Component({
  selector: 'app-ultimos',
  templateUrl: './ultimos.component.html',
  styleUrls: ['./ultimos.component.css']
})
export class UltimosComponent implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getUltimas().subscribe( (resp: Consulta) => {
      resp.results?.map( pelicula => {
        if(pelicula.overview.length > 200) {
          pelicula.overview = pelicula.overview.substring(0, 200).concat('...');
        }
        console.log(pelicula.overview.length);
        this.peliculas.push( pelicula );
      });
      console.log(this.peliculas);
    });
  }

}
