import { Component, OnInit } from '@angular/core';
import { Personaje } from '../modelos/personaje.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  personajes: Personaje[] = [];
  paginas: number;
  total: number;
  paginaActual: number;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<{
              _embedded: {personajes: Personaje[]},
              page: {
                size: number,
                totalElements: number,
                totalPages: number,
                number: number
              }}>('http://localhost:8080/personajes').subscribe(data => {
      this.paginas = data.page.totalPages;
      this.paginaActual = data.page.number;
      this.total = data.page.totalElements;
      this.personajes = data._embedded.personajes;
    });
  }

}
