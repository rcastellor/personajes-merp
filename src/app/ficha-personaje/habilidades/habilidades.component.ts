import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../../modelos/habilidad.model';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  clases = ['TITULO_MOVIMIENTO',
            'TITULO_ARMAS',
            'TITULO_GENERALES',
            'TITULO_SUBTERFUGIO',
            'TITULO_MAGICAS',
            'TITULO_OTRAS',
            'HABILIDAD'];
  titulos = ['MOVIMIENTO Y MANIOBRA',
            'HABILIDADES CON ARMAS(Bonificaciones ofensivas)',
            'HABILIDADES GENERALES',
            'HABILIDADES DE SUBTERFUGIO',
            'HABILIDADES MAGICAS',
            'OTRAS HABILIDADES Y BONIFICACIONES',
            'HABILIDADES SECUNDARIAS'];

  habilidades: Habilidad[][];

  constructor(private pjService: PersonajeService) { }

  ngOnInit() {
    this.habilidades = this.pjService.obtenHabilidades();
  }

}
