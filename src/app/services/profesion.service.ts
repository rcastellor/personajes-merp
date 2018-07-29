import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Profesion, GUERRERO, MONTARAZ, ANIMISTA, EXPLORADOR, BARDO, MAGO } from '../modelos/profesion.model';
import { ENANO } from '../modelos/raza.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesionService {

  private _profesionesPermitidas$: BehaviorSubject<Profesion[]>;
  _profesionesObs$: Observable<Profesion[]>;

  private _profesiones: Profesion[];

  private _profesionesRaza = [
    [GUERRERO, EXPLORADOR, ANIMISTA, MONTARAZ],
    [GUERRERO, MAGO, EXPLORADOR, ANIMISTA, MONTARAZ, BARDO]
  ];

  private _dominiosProfesion: string[][];

  obtenDominiosPermitidos(profesion: number) {
    return this._dominiosProfesion[profesion];
  }

  obtenProfesion(profesion: number) {
    return this._profesiones[profesion];
  }

  razaSeleccionada(raza: number) {
    const profesiones = [];
    for (const pr of this._profesionesRaza[raza]) {
      profesiones.push({...this._profesiones[pr]});
    }
    this._profesionesPermitidas$.next(profesiones);
  }

  constructor() {
    this._profesiones = [
      { id: GUERRERO, descripcion: 'Guerrero' },
      { id: MAGO, descripcion: 'Mago' },
      { id: EXPLORADOR, descripcion: 'Explorador'},
      { id: ANIMISTA, descripcion: 'Animista'},
      { id: MONTARAZ, descripcion: 'Montaraz'},
      { id: BARDO, descripcion: 'Bardo'}
    ];

    this._profesionesPermitidas$ = new BehaviorSubject([]);
    this._profesionesObs$ = this._profesionesPermitidas$.asObservable();
    this._dominiosProfesion = [];
    this._dominiosProfesion[GUERRERO] = ['ESENCIA', 'CANALIZACION'];
    this._dominiosProfesion[MAGO] = ['ESENCIA'];
    this._dominiosProfesion[EXPLORADOR] = ['ESENCIA', 'CANALIZACION'];
    this._dominiosProfesion[ANIMISTA] = ['CANALIZACION'];
    this._dominiosProfesion[MONTARAZ] = ['CANALIZACION'];
    this._dominiosProfesion[BARDO] = ['ESENCIA'];
  }
}
