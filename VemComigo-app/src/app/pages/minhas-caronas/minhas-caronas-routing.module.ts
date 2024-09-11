import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhasCaronasPage } from './minhas-caronas.page';

const routes: Routes = [
  {
    path: '',
    component: MinhasCaronasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhasCaronasPageRoutingModule {}
