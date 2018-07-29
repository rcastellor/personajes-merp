import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { ListaSortilegio } from '../../modelos/lista-sortilegio.model';

@Component({
  selector: 'app-sortilegios',
  templateUrl: './sortilegios.component.html',
  styleUrls: ['./sortilegios.component.css']
})
export class SortilegiosComponent implements OnInit {

  listas: ListaSortilegio[];

  constructor(private pjService: PersonajeService) { }

  ngOnInit() {
    this.listas = this.pjService.obtenListasSortilegios();
  }
  onNuevaLista() {
    this.pjService.nuevaListaSortilegios();
  }
}
