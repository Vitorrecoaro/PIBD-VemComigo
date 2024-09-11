import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaronasDisponiveisPage } from './caronas-disponiveis.page';

const routes: Routes = [
  {
    path: '',
    component: CaronasDisponiveisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaronasDisponiveisPageRoutingModule {}
