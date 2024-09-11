import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaronaAceitaPage } from './carona-aceita.page';

const routes: Routes = [
  {
    path: '',
    component: CaronaAceitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaronaAceitaPageRoutingModule {}
