import { Component, OnInit, Input } from '@angular/core';
import { Personaje } from '../../modelos/personaje.model';
import { PersonajeService } from '../../services/personaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-personaje',
  templateUrl: './vista-personaje.component.html',
  styleUrls: ['./vista-personaje.component.css']
})
export class VistaPersonajeComponent implements OnInit {

  @Input() personaje: Personaje;

  constructor(private pjService: PersonajeService,
              private router: Router) { }

  ngOnInit() {
  }
  onSeleccionPersonaje() {
    this.pjService.definePersonaje(this.personaje);
    this.router.navigate(['/personaje']);
  }
}
