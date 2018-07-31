import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Habilidad } from '../../../modelos/habilidad.model';
import { PersonajeService } from '../../../services/personaje.service';

@Component({
  selector: 'app-habilidad-defensiva',
  templateUrl: './habilidad-defensiva.component.html',
  styleUrls: ['./habilidad-defensiva.component.css']
})
export class HabilidadDefensivaComponent implements OnInit, OnDestroy {

  @Input() habilidad: Habilidad;
  caracteristica: Subscription;
  raza: Subscription;

  constructor(private pjService: PersonajeService) { }

  ngOnInit() {
    this.habilidad.valorTotal = this.pjService.total(this.habilidad);
    const obs = this.pjService.obtenObservableCaracteristica(this.habilidad.abrCar);
    if (obs) {
      this.caracteristica = obs.subscribe(val => {
        this.habilidad.caracteristica = val;
        this.habilidad.valorTotal = this.pjService.total(this.habilidad);
      });
    }
  }

  ngOnDestroy() {
    if (this.caracteristica) {
      this.caracteristica.unsubscribe();
    }
  }

  onChange() {
    this.habilidad.valorTotal = this.pjService.total(this.habilidad);
  }
}
