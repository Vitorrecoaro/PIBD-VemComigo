import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvaliarCaronaPage } from './avaliar-carona.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliarCaronaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvaliarCaronaPageRoutingModule {}
