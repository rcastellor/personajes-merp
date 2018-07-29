import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Raza, ENANO, CAMPESINO } from '../modelos/raza.model';
import { FUE, AGI, CON, INT, I, PRE, APA } from '../modelos/caracteristicas.model';

@Injectable({
  providedIn: 'root'
})
export class RazaService {


  private _razas: Raza[];
  private _razasObs$: Observable<Raza[]>;
  private _bonificacionRazas = [];
  private _idiomasRazas = [];
  private _dominiosRaza: string[][];


  constructor() {
    this._bonificacionRazas[ENANO] = [];
    this._bonificacionRazas[ENANO][FUE] = '5';
    this._bonificacionRazas[ENANO][AGI] = '-5';
    this._bonificacionRazas[ENANO][CON] = '15';
    this._bonificacionRazas[ENANO][INT] = '0';
    this._bonificacionRazas[ENANO][I] = '-5';
    this._bonificacionRazas[ENANO][PRE] = '-5';
    this._bonificacionRazas[ENANO][APA] = '';

    this._bonificacionRazas[CAMPESINO] = [];
    this._bonificacionRazas[CAMPESINO][FUE] = '5';
    this._bonificacionRazas[CAMPESINO][AGI] = '0';
    this._bonificacionRazas[CAMPESINO][CON] = '0';
    this._bonificacionRazas[CAMPESINO][INT] = '0';
    this._bonificacionRazas[CAMPESINO][I] = '0';
    this._bonificacionRazas[CAMPESINO][PRE] = '0';
    this._bonificacionRazas[CAMPESINO][APA] = '';


    let idiomas = [];
    this._idiomasRazas[ENANO] = idiomas;
    idiomas.push({idioma: 'Oestron', grado: 5});
    idiomas.push({idioma: 'Khuzdul', grado: 5});
    idiomas.push({idioma: 'Sindarin', grado: 3});

    idiomas = [];
    this._idiomasRazas[CAMPESINO] = idiomas;
    idiomas.push({idioma: 'Oestron', grado: 5});


    this._dominiosRaza = [];
    this._dominiosRaza[ENANO] = ['CANALIZACION'];
    this._dominiosRaza[CAMPESINO] = ['ESENCIA', 'CANALIZACION'];
  }


  obtenRaza(id: number) {
    for (const raza of this._razas) {
      if (raza.id === id) {
        return {...raza};
      }
    }
    return null;
  }


  obtenRazas(): Observable<Raza[]> {
    if (this._razas) {
      return of(this._razas);
    } else if (this._razasObs$) {
      return this._razasObs$;
    } else {
      // TODO Sacar esto de la api
      this._razas = [
        { id: ENANO, descripcion: 'Enano' },
        { id: CAMPESINO, descripcion: 'Campesino' },
      ];
      this._razasObs$ = of(this._razas);
      return this._razasObs$;
    }
  }

  obtenBonificacionRaza(raza: number) {
    return this._bonificacionRazas[raza];
  }

  obtenIdiomasRaza(raza: number) {
    return this._idiomasRazas[raza];
  }

  obtenDominioRaza(raza: number) {
    return this._dominiosRaza[raza];
  }
}