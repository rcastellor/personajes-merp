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
import { SignedNumberPipe } from './shared/signed-number.pipe';
import { HabilidadDefensivaComponent } from './ficha-personaje/habilidades/habilidad-defensiva/habilidad-defensiva.component';
import { DefensivasComponent } from './ficha-personaje/habilidades/defensivas/defensivas.component';
import { PortalComponent } from './portal/portal.component';


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
    SignedNumberPipe,
    HabilidadDefensivaComponent,
    DefensivasComponent,
    PortalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
