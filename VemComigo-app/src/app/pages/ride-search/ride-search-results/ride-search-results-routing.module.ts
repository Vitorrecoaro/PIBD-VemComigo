import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RideSearchResultsPage } from './ride-search-results.page';

const routes: Routes = [
  {
    path: '',
    component: RideSearchResultsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RideSearchResultsPageRoutingModule {}
