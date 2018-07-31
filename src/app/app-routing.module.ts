import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortalComponent } from './portal/portal.component';
import { FichaPersonajeComponent } from './ficha-personaje/ficha-personaje.component';
import { MaestrosComponent } from './maestros/maestros.component';

const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: 'listado', component: PortalComponent },
  { path: 'personaje', component: FichaPersonajeComponent },
  { path: 'maestros', component: MaestrosComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
