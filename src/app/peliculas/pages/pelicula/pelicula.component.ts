import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { switchMap } from "rxjs/operators";
import { PeliculaDetalle } from '../../interfaces/peliculas.interface';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula!: PeliculaDetalle;

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService,
               private router: Router ) { }

  ngOnInit(): void {

    /*this.activatedRoute.params.subscribe( ({ id }) => {
      console.log(id);
    });*/

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => 
        this.peliculasService.getPeliculaId( id )
      )
    )
    .subscribe( pelicula => {
      this.pelicula = pelicula;
    });

  }
  
  regresar() {
    this.router.navigate(['/peliculas/ultimos']);
  }

}
