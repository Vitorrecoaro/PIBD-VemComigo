import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RideAcceptedPage } from './ride-accepted.page';

const routes: Routes = [
  {
    path: '',
    component: RideAcceptedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RideAcceptedPageRoutingModule {}
