import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../../modelos/habilidad.model';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-bonificaciones-habilidades',
  templateUrl: './bonificaciones-habilidades.component.html',
  styleUrls: ['./bonificaciones-habilidades.component.css']
})
export class BonificacionesHabilidadesComponent implements OnInit {

  habilidades: Habilidad[][];

  constructor(private pjService: PersonajeService) { }

  ngOnInit() {
    this.habilidades = this.pjService.obtenHabilidades();
  }

}
