import { Component, OnInit, Input } from '@angular/core';

import { Habilidad } from '../../../modelos/habilidad.model';

@Component({
  selector: 'app-bon-habilidad',
  templateUrl: './bon-habilidad.component.html',
  styleUrls: ['./bon-habilidad.component.css']
})
export class BonHabilidadComponent implements OnInit {

  @Input() habilidad: Habilidad;
  constructor() { }

  ngOnInit() {
  }

}
