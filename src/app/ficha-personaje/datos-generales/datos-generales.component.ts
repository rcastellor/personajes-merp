import { Component, OnInit } from '@angular/core';
import { RazaService } from '../../services/raza.service';
import { Observable } from 'rxjs';

import { Raza } from '../../modelos/raza.model';
import { DatosPersonaje } from '../../modelos/datos-personaje.model';
import { PersonajeService } from '../../services/personaje.service';
import { Profesion } from '../../modelos/profesion.model';
import { ProfesionService } from '../../services/profesion.service';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css']
})
export class DatosGeneralesComponent implements OnInit {

  razas$: Observable<Raza[]>;
  profesiones$: Observable<Profesion[]>;

  raza: number;
  profesion: number;
  datos: DatosPersonaje;

  constructor(private rzService: RazaService,
              private pjService: PersonajeService,
              private pfService: ProfesionService) { }

  ngOnInit() {
    this.razas$ = this.rzService.obtenRazas();
    this.profesiones$ = this.pfService._profesionesObs$;

    this.datos = this.pjService.obtenDatosGenerales();
  }

  onChangeRaza() {
    this.pjService.cambiaRaza(Number(this.raza));
  }

  onChangeProfesion() {
    this.pjService.cambiaProfesion(Number(this.profesion));
  }

}
