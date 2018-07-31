import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { Personaje } from '../modelos/personaje.model';
import { RazaService } from './raza.service';
import { ProfesionService } from './profesion.service';
import { APA, INT, I, FUE, AGI, CON, PRE } from '../modelos/caracteristicas.model';
import { ListaSortilegio } from '../modelos/lista-sortilegio.model';
import { calculaBonificacion, calculaPoder } from '../shared/util';
import { Habilidad } from '../modelos/habilidad.model';



@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  private _data: Personaje;
  private _raza$: BehaviorSubject<number>;
  razaObs$: Observable<number>;

  private _profesion$: BehaviorSubject<number>;
  profesionObs$: Observable<number>;

  private _caracteristicas$: BehaviorSubject<number>[];
  public carObs$: Observable<number>[];

  private _dominiosPermitidos$: BehaviorSubject<string[]>;
  public dominiosObs$: Observable<string[]>;

  obtenPersonaje() {
    return this._data;
  }

  obtenDatosGenerales() {
    return this._data.datos;
  }

  obtenCaracteristicas() {
    return this._data.caracteristicas;
  }

  obtenIdiomas() {
    return this._data.idiomas;
  }

  obtenListasSortilegios() {
    return this._data.listas;
  }

  obtenDominio() {
    return this._data.dominio;
  }

  obtenHabilidades() {
    return this._data.habilidades;
  }

  obtenHabilidadesDefensivas() {
    return this._data.tr;
  }

  obtenHabilidadesSecundarias() {
    return this._data.secundarias;
  }

  cambioEnDominio() {
    if (this._data.dominio.dominio === 'ESENCIA') {
      this._data.dominio.ppoder = calculaPoder(Number(this._data.caracteristicas[INT].valor));
    } else if (this._data.dominio.dominio === 'CANALIZACION') {
      this._data.dominio.ppoder = calculaPoder(Number(this._data.caracteristicas[I].valor));
    } else {
      this._data.dominio.ppoder = 0;
    }

  }

  cambiaRaza(raza: number) {
    this._data.datos.raza = this.rzService.obtenRaza(raza);
    this._raza$.next(raza);
    this.pfService.razaSeleccionada(raza);
    let i = 0;
    for (const bonificacion of this.rzService.obtenBonificacionRaza(raza)) {
      this._data.caracteristicas[i].raza = bonificacion;
      this.cambioCaracteristica(i++);
    }
    this._data.idiomas.length = 0;
    for (const idioma of this.rzService.obtenIdiomasRaza(raza)) {
      this._data.idiomas.push({...idioma});
    }
    this._data.listas.length = 0;
    if (this._data.datos.profesion) {
      this.cambiaDominioPermitido(raza, this._data.datos.profesion.id);
    }
    const habilidades = this.rzService.obtenHabilidadesRaza(raza);
    for (let k = 0; k < habilidades.length; k++) {
      for (let j = 0; j < habilidades[k].length; j++) {
        this._data.habilidades[k][j].gradoRaza = habilidades[k][j];
        this.reset(this._data.habilidades[k][j]);
      }
    }
    this._raza$.next(raza);
  }

  cambiaDominioPermitido(raza: number, profesion: number) {
    const permitidosRaza = this.rzService.obtenDominioRaza(raza);
    const permitidoosProfesion = this.pfService.obtenDominiosPermitidos(profesion);
    const permitidos = [];
    for (const pr of permitidosRaza) {
      if ( permitidoosProfesion.indexOf(pr) !== -1) {
        permitidos.push(pr);
      }
    }
    this._dominiosPermitidos$.next(permitidos);
    this._data.dominio.dominio = '';
    this._data.dominio.ppoder = 0;
  }

  cambiaProfesion(profesion: number) {
    this._data.datos.profesion = this.pfService.obtenProfesion(profesion);
    this._profesion$.next(profesion);
    this.cambiaDominioPermitido(this._data.datos.raza.id, this._data.datos.profesion.id);
  }



  cambioCaracteristica(caracteristica: number) {
    const tmp = this._data.caracteristicas[caracteristica];
    if (caracteristica === APA) {
      tmp.normal = '';
      tmp.total = tmp.valor;
    } else {
      if (this._data.dominio.dominio === 'ESENCIA' && caracteristica === INT ) {
        this._data.dominio.ppoder =  calculaPoder(Number(this._data.caracteristicas[caracteristica].valor));
      } else if (this._data.dominio.dominio === 'CANALIZACION' && caracteristica === I) {
        this._data.dominio.ppoder =  calculaPoder(Number(this._data.caracteristicas[caracteristica].valor));
      }
      tmp.normal = calculaBonificacion(Number(this._data.caracteristicas[caracteristica].valor));
      tmp.total = String(Number(tmp.normal) + Number(tmp.raza));
      this._caracteristicas$[caracteristica].next(Number(tmp.total));
    }
  }

  generaCaracteristicas() {
    for (let i = 0; i < this._data.caracteristicas.length; i++) {
      let valor = 0;
      do {
        valor = Math.floor((Math.random() * 100) + 1);
      } while (valor < 20);

      this._data.caracteristicas[i].valor = String(valor);
      this.cambioCaracteristica(i);
    }
  }

  nuevoIdioma() {
    this._data.idiomas.push({idioma: '', grado: 0 });
  }

  nuevaListaSortilegios() {
    const lista = new ListaSortilegio();
    lista.aprendida = false;
    lista.lista = '';
    lista.prob = 0;
    this._data.listas.push(lista);
  }

  obtenObservableCaracteristica(car: string) {
    switch (car) {
      case 'FUE':
        return this.carObs$[FUE];
      case 'AGI':
        return this.carObs$[AGI];
      case 'CON':
        return this.carObs$[CON];
      case 'INT':
        return this.carObs$[INT];
      case 'I':
        return this.carObs$[I];
      case 'PRE':
        return this.carObs$[PRE];
      default:
        return null;
    }
  }
  definePersonaje(personaje: Personaje) {
    this._data = personaje;
  }

  constructor(private rzService: RazaService,
              private pfService: ProfesionService) {
    this._data = new Personaje();
    this._raza$ = new BehaviorSubject<number>(-1);
    this.razaObs$ = this._raza$.asObservable();
    this._profesion$ = new BehaviorSubject<number>(-1);
    this.profesionObs$ = this._profesion$.asObservable();

    this._caracteristicas$ = [];
    this.carObs$ = [];
    for (let i = 0; i < 7; i++) {
      this._caracteristicas$[i] = new BehaviorSubject(0);
      this.carObs$[i] = this._caracteristicas$[i].asObservable();
    }

    this._dominiosPermitidos$ = new BehaviorSubject([]);
    this.dominiosObs$ = this._dominiosPermitidos$.asObservable();
  }

  bonGrado(habilidad: Habilidad): number {
    let valor = 0;
    if ( habilidad.aplicaTiradas ) {
        for (let i = 0; i < habilidad.grado; i++) {
            if (habilidad.valorTiradas[i]) {
                valor += habilidad.valorTiradas[i];
            } else {
                let tirada = 0;
                do {
                    tirada = Math.floor((Math.random() * 10) + 1);
                } while (tirada < 4);
                habilidad.valorTiradas[i] = tirada;
                valor += tirada;
            }
        }
    } else {
        for (let i = 0; i < habilidad.grado; i++) {
            if (i < 10) {
                valor += 5;
            } else if (i < 15) {
                valor += 2;
            }
        }
    }
    if (habilidad.grado === 0) {
        valor = -25;
    }
    return valor;
}

total(habilidad: Habilidad): number {
    let valor = 0;
    if (habilidad.aplicaGrado) {
        valor += this.bonGrado(habilidad);
    }
    if (habilidad.aplicaCar) {
        valor += Number(habilidad.caracteristica);
    }
    if (habilidad.aplicaProfesion) {
        valor += Number(habilidad.profesion);
    }
    valor += Number(habilidad.objeto);
    valor += Number(habilidad.especial);
    valor += Number(habilidad.especial2);
    return valor;
  }

  reset(habilidad: Habilidad) {
    habilidad.grado = habilidad.gradoRaza;
    habilidad.valorGrado = this.bonGrado(habilidad);
    habilidad.valorTotal = this.total(habilidad);
  }
}
