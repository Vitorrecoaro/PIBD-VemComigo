import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarCaronaPage } from './criar-carona.page';

const routes: Routes = [
  {
    path: '',
    component: CriarCaronaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarCaronaPageRoutingModule {}
