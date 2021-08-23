import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula, Consulta } from '../../interfaces/peliculas.interface';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css']
})
export class PopularesComponent implements OnInit {
  
  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getPopulares().subscribe( (resp: Consulta) => {
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
