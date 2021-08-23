import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Pelicula, Consulta } from '../../interfaces/peliculas.interface';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  peliculas: Pelicula[] = [];
  peliculaSeleccionada!: Pelicula;

  constructor( private peliculasService: PeliculasService) { }

  ngOnInit(): void {
  }

  buscando() {
    this.peliculas = [];
    console.log(this.termino);
    this.peliculasService.buscarPelicula( this.termino ).subscribe( (resp: Consulta) => {
      resp.results?.map( pelicula => {
        if(pelicula.overview.length > 200) {
          pelicula.overview = pelicula.overview.substring(0, 200).concat('...');
        }
        this.peliculas.push( pelicula );

      });
      console.log(this.peliculas);
    });
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {
    const pelicula: Pelicula = event.option.value;
    this.termino = pelicula.title;
    this.buscando();
  }

}
