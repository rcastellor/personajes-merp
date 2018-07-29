import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FichaPersonajeComponent } from './ficha-personaje/ficha-personaje.component';
import { DatosGeneralesComponent } from './ficha-personaje/datos-generales/datos-generales.component';
import { CaracteristicasComponent } from './ficha-personaje/caracteristicas/caracteristicas.component';
import { IdiomasComponent } from './ficha-personaje/idiomas/idiomas.component';
import { SortilegiosComponent } from './ficha-personaje/sortilegios/sortilegios.component';
import { DominioComponent } from './ficha-personaje/dominio/dominio.component';
import { HabilidadesComponent } from './ficha-personaje/habilidades/habilidades.component';
import { HabilidadComponent } from './ficha-personaje/habilidades/habilidad/habilidad.component';
import { BonificacionesHabilidadesComponent } from './ficha-personaje/bonificaciones-habilidades/bonificaciones-habilidades.component';
import { BonHabilidadComponent } from './ficha-personaje/bonificaciones-habilidades/bon-habilidad/bon-habilidad.component';
import { SignedNumberPipe } from './shared/signed-number.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FichaPersonajeComponent,
    DatosGeneralesComponent,
    CaracteristicasComponent,
    IdiomasComponent,
    SortilegiosComponent,
    DominioComponent,
    HabilidadesComponent,
    HabilidadComponent,
    BonificacionesHabilidadesComponent,
    BonHabilidadComponent,
    SignedNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
