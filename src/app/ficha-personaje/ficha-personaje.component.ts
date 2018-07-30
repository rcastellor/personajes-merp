import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../services/personaje.service';

@Component({
  selector: 'app-ficha-personaje',
  templateUrl: './ficha-personaje.component.html',
  styleUrls: ['./ficha-personaje.component.css']
})
export class FichaPersonajeComponent implements OnInit {

  constructor(private pjService: PersonajeService) { }

  ngOnInit() {
  }

  onGuardarPersonaje() {
    console.log(JSON.stringify(this.pjService.obtenPersonaje()));
  }
}
