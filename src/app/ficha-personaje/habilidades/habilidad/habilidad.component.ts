import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Habilidad } from '../../../modelos/habilidad.model';
import { Control } from './modelo/control.model';
import { PersonajeService } from '../../../services/personaje.service';


@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit, OnDestroy {

  @Input() habilidad: Habilidad;

  controles5: Control[];
  controles2: Control[];
  gradoSeleccionado: number;
  caracteristica: Subscription;
  raza: Subscription;

  constructor(private pjService: PersonajeService) { }

  ngOnInit() {
    this.controles5 = [];
    this.controles2 = [];
    for (let i = 0; i < this.habilidad.gradoMaximo && i < 10; i++) {
      this.controles5.push({activado: false, readonly: false});
    }
    for (let i = 0; i < (this.habilidad.gradoMaximo - 10) && i < 5; i++) {
      this.controles2.push({activado: false, readonly: false});
    }

    const obs = this.pjService.obtenObservableCaracteristica(this.habilidad.abrCar);
    if (obs) {
      this.caracteristica = obs.subscribe(val => {
        this.habilidad.caracteristica = val;
        this.habilidad.valorTotal = this.habilidad.total();
      });
    }
    this.raza = this.pjService.razaObs$.subscribe( raza => {
      this.inicializaControles();
    });
  }

  ngOnDestroy() {
    if (this.caracteristica) {
      this.caracteristica.unsubscribe();
    }
    this.raza.unsubscribe();
  }

  inicializaControles() {
    for (let i = 0; i < this.controles5.length; i++) {
      if (i < this.habilidad.gradoRaza) {
        this.controles5[i].readonly = true;
        this.controles5[i].activado = true;
      } else {
        this.controles5[i].readonly = false;
        this.controles5[i].activado = false;
      }
    }
    for (const control of this.controles2) {
      control.readonly = false;
      control.activado = false;
    }
  }

  onChange() {
    this.habilidad.valorTotal = this.habilidad.total();
  }

  seleccionaGrado5(index: number) {
    if (index < this.habilidad.gradoRaza) {
      return;
    }
    if ( this.controles5[index].activado === true) {
      this.gradoSeleccionado = index - 1;
    } else {
      this.gradoSeleccionado = index;
    }
    for (let i = 0; i < this.habilidad.gradoMaximo && i < 10; i++) {
      if (i <= this.gradoSeleccionado) {
        this.controles5[i].activado = true;
      } else {
        this.controles5[i].activado = false;
      }
    }
    for (const control of this.controles2) {
      control.activado = false;
    }
    this.habilidad.grado = this.gradoSeleccionado + 1;
    this.habilidad.valorGrado = this.habilidad.bonGrado();
    this.habilidad.valorTotal = this.habilidad.total();
  }

  seleccionaGrado2(index: number) {
    if ( this.controles2[index].activado === true) {
      this.gradoSeleccionado = 10 + index - 1;
    } else {
      this.gradoSeleccionado = 10 + index;
    }
    for (let i = 0; i < 10; i++) {
      this.controles5[i].activado = true;
    }

    for (let i = 0; i < 5; i++) {
      if (i <= (this.gradoSeleccionado - 10)) {
          this.controles2[i].activado = true;
      } else {
        this.controles2[i].activado = false;
      }
    }
    this.habilidad.grado = this.gradoSeleccionado + 1;
    this.habilidad.valorGrado = this.habilidad.bonGrado();
    this.habilidad.valorTotal = this.habilidad.total();
  }

}
