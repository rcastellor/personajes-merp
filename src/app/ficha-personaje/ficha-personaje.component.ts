import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../services/personaje.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personaje } from '../modelos/personaje.model';

@Component({
  selector: 'app-ficha-personaje',
  templateUrl: './ficha-personaje.component.html',
  styleUrls: ['./ficha-personaje.component.css']
})
export class FichaPersonajeComponent implements OnInit {

  constructor(private pjService: PersonajeService,
              private http: HttpClient) { }

  ngOnInit() {
  }

  onGuardarPersonaje() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    this.http.post<Personaje>('http://localhost:8080/personajes',
            this.pjService.obtenPersonaje(),
            httpOptions).subscribe(data => console.log(data));
  }
}
