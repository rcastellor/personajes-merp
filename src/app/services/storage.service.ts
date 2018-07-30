import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Personaje } from '../modelos/personaje.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  personajes: Personaje[];

  constructor(private http: HttpClient) { }

  obtenPersonajes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(environment.apiURL);
  }

  guardaPersonajes(personajes: Personaje[]) {
    return this.http.post(environment.apiURL, {body: personajes});
  }
}
