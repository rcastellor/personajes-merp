import { Component, OnInit } from '@angular/core';

import { PersonajeService } from '../../services/personaje.service';
import { Idioma } from '../../modelos/idioma.model';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  idiomas: Idioma[];

  constructor(private pjService: PersonajeService) { }

  ngOnInit() {
    this.idiomas = this.pjService.obtenIdiomas();
  }

  onNuevoIdioma() {
    this.pjService.nuevoIdioma();
  }

  prueba(comp: any) {
    console.log(comp);
  }
}
