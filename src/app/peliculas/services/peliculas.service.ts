import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consulta, PeliculaDetalle } from '../interfaces/peliculas.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getUltimas(): Observable<Consulta> {
    return this.http.get<Consulta>(`${ this.baseUrl }/peliculas/ultimas?page=1`);
  }

  getMejorCalificadas(): Observable<Consulta> {
    return this.http.get<Consulta>(`${ this.baseUrl }/peliculas/mejor-calificadas?page=1`);
  }

  getPopulares(): Observable<Consulta> {
    return this.http.get<Consulta>(`${ this.baseUrl }/peliculas/populares?page=1`);
  }

  getPeliculaId( id: string ): Observable<PeliculaDetalle> {
    return this.http.get<PeliculaDetalle>(`${ this.baseUrl }/pelicula/${ id }`);
  }

  buscarPelicula( palabraClave: string ): Observable<Consulta> {
    return this.http.get<Consulta>(`${ this.baseUrl }/buscar?query=${ palabraClave }&page=1`);
  }


}
