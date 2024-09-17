import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RideSearchDetailsPage } from './ride-search-details.page';

const routes: Routes = [
  {
    path: '',
    component: RideSearchDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RideSearchDetailsPageRoutingModule {}
