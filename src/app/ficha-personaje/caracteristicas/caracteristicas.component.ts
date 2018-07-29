import { Component, OnInit } from '@angular/core';

import { Caracteristica } from '../../modelos/caracteristicas.model';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css']
})
export class CaracteristicasComponent implements OnInit {

  caracteristicas: Caracteristica[];
  constructor(private pjService: PersonajeService) { }

  ngOnInit() {
    this.caracteristicas = this.pjService.obtenCaracteristicas();
  }

  calculaTotal(index) {
    this.pjService.cambioCaracteristica(index);
  }

  onGeneraTiradas() {
    this.pjService.generaCaracteristicas();
  }

}
