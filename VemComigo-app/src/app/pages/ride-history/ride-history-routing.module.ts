import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RideHistoryPage } from './ride-history.page';

const routes: Routes = [
  {
    path: '',
    component: RideHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RideHistoryPageRoutingModule {}
