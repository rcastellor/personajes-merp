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
  defensivas: Habilidad[];
  secundarias: Habilidad[];

  constructor(private pjService: PersonajeService) { }

  ngOnInit() {
    this.habilidades = this.pjService.obtenHabilidades();
    this.defensivas = this.pjService.obtenHabilidadesDefensivas();
    this.secundarias = this.pjService.obtenHabilidadesSecundarias();
  }

  onNuevaSecundaria() {
    const habilidad = new Habilidad('', 'xxx', 15, -1);
    habilidad.descripcionLibre = true;
    habilidad.aplicaProfesion = false;
    habilidad.aplicaCar = false;
    this.secundarias.push(habilidad);
  }
}
