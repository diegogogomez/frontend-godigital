import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UltimosComponent } from './pages/ultimos/ultimos.component';
import { HomeComponent } from './pages/home/home.component';
import { MejorCalificadasComponent } from './pages/mejor-calificadas/mejor-calificadas.component';
import { PopularesComponent } from './pages/populares/populares.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'ultimos',
        component: UltimosComponent
      },
      {
        path: 'mejor-calificados',
        component: MejorCalificadasComponent
      },
      {
        path: 'populares',
        component: PopularesComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: ':id',
        component: PeliculaComponent
      },
      {
        path: '**',
        redirectTo: 'ultimos'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class PeliculasRoutingModule { }
