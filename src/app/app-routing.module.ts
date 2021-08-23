import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'peliculas', loadChildren: () => import('./peliculas/peliculas.module').then( m => m.PeliculasModule)
  },
  {
    path: '404', component: ErrorPageComponent
  },
  {
    path: '**', redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
