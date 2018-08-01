import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Raza, ENANO, CAMPESINO } from '../modelos/raza.model';
import { FUE, AGI, CON, INT, I, PRE, APA } from '../modelos/caracteristicas.model';
import { MOVIMIENTO, ARMAS, GENERALES, SUBTERFUGIO, MAGICAS, OTRAS_HABILIDADES } from '../modelos/habilidad.model';
import { GUERRERO, EXPLORADOR, MONTARAZ, ANIMISTA } from '../modelos/profesion.model';

@Injectable({
  providedIn: 'root'
})
export class RazaService {


  private _razas: Raza[];
  private _razasObs$: Observable<Raza[]>;
  private _bonificacionRazas = [];
  private _idiomasRazas = [];
  private _dominiosRaza: string[][];
  private _habilidadesRaza: number[][][];
  private _imagenes: string[][];


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

    this._habilidadesRaza = [];
    this._habilidadesRaza[ENANO] = [];
    this._habilidadesRaza[ENANO][MOVIMIENTO] = [1, 0, 1, 3, 0];
    this._habilidadesRaza[ENANO][ARMAS] = [0, 4, 0, 1, 0, 0];
    this._habilidadesRaza[ENANO][GENERALES] = [1, 0, 0, 0];
    this._habilidadesRaza[ENANO][SUBTERFUGIO] = [0, 0, 1, 1];
    this._habilidadesRaza[ENANO][MAGICAS] = [0, 0, 0];
    this._habilidadesRaza[ENANO][OTRAS_HABILIDADES] = [2, 3];

    this._habilidadesRaza[CAMPESINO] = [];
    this._habilidadesRaza[CAMPESINO][MOVIMIENTO] = [1, 1, 1, 1, 0];
    this._habilidadesRaza[CAMPESINO][ARMAS] = [1, 0, 0, 1, 1, 1];
    this._habilidadesRaza[CAMPESINO][GENERALES] = [0, 1, 1, 0];
    this._habilidadesRaza[CAMPESINO][SUBTERFUGIO] = [0, 1, 0, 0];
    this._habilidadesRaza[CAMPESINO][MAGICAS] = [0, 0, 0];
    this._habilidadesRaza[CAMPESINO][OTRAS_HABILIDADES] = [1, 2];

    this._imagenes = [];
    this._imagenes[ENANO] = [];
    this._imagenes[ENANO][GUERRERO] = 'assets/dwarf_animista.jpg';
    this._imagenes[ENANO][EXPLORADOR] = 'assets/dwarf_animista.jpg';
    this._imagenes[ENANO][MONTARAZ] = 'assets/dwarf_animista.jpg';
    this._imagenes[ENANO][ANIMISTA] = 'assets/dwarf_animista.jpg';
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
  obtenHabilidadesRaza(raza: number) {
    return this._habilidadesRaza[raza];
  }
}
