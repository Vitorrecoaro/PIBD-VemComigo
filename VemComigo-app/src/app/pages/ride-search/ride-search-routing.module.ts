import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RideSearchPage } from './ride-search.page';

const routes: Routes = [
  {
    path: '',
    component: RideSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RideSearchPageRoutingModule {}
