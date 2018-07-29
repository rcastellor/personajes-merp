import { Injectable } from '@angular/core';
import { DefinicionLista } from '../modelos/lista-sortilegio.model';

@Injectable({
  providedIn: 'root'
})
export class ListasSortilegiosService {

  private _listasProfesion: number[];

  listas: DefinicionLista[];

  constructor() {
    this.listas.push({
      tipo: 'ESENCIA',
      descripcion: 'LISTAS ABIERTAS',
      listas: [
        'ENALTECIMIENTO FISICO',
        'MANO DE LA ESENCIA'
      ]
    });
    this.listas.push({
      tipo: 'CANALIZACION',
      descripcion: 'LISTAS ABIERTAS',
      listas: [
        'MAESTRIA EN LA DETECCION',
        'VIAS DE LA LUZ Y SONIDO',
        'SERENAR ESPIRITUS'
      ]
    });
    this.listas.push({
      tipo: 'ANIMISTA',
      descripcion: 'LISTAS ANIMISTA',
      listas: [
        'CONTROL DE LAS PLANTAS',
        'CANALIZACION DIRECTA',
        'CONTROL ANIMAL'
      ]
    });
  }
}
