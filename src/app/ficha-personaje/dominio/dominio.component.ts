import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { Observable } from 'rxjs';
import { FUE } from '../../modelos/caracteristicas.model';
import { diPublic } from '@angular/core/src/render3/di';
import { MAGO, BARDO, ANIMISTA, MONTARAZ, GUERRERO, EXPLORADOR } from '../../modelos/profesion.model';

@Component({
  selector: 'app-dominio',
  templateUrl: './dominio.component.html',
  styleUrls: ['./dominio.component.css']
})
export class DominioComponent implements OnInit {

  profesion: number;
  fuerza: number;
  dominio: any;

  dominiosPermitidos$: Observable<string[]>;

  constructor(private pjService: PersonajeService) { }

  ngOnInit() {
    this.pjService.profesionObs$.subscribe(profesion => {
      this.profesion = profesion;
    });
    this.pjService.carObs$[FUE].subscribe(fuerza => this.fuerza = fuerza);
    this.dominio = this.pjService.obtenDominio();
    this.dominiosPermitidos$ = this.pjService.dominiosObs$;
  }
  onDominioChange() {
    this.pjService.cambioEnDominio();
  }
}
