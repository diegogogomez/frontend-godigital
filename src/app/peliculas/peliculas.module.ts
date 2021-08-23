import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltimosComponent } from './pages/ultimos/ultimos.component';
import { MejorCalificadasComponent } from './pages/mejor-calificadas/mejor-calificadas.component';
import { PopularesComponent } from './pages/populares/populares.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { PeliculaTarjetaComponent } from './components/pelicula-tarjeta/pelicula-tarjeta.component';



@NgModule({
  declarations: [
    UltimosComponent,
    MejorCalificadasComponent,
    PopularesComponent,
    PeliculaComponent,
    BuscarComponent,
    HomeComponent,
    PeliculaTarjetaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    PeliculasRoutingModule,
    FormsModule
  ]
})
export class PeliculasModule { }
