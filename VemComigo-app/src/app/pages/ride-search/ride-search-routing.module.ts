import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RideSearchPage } from './ride-search.page';

const routes: Routes = [
  {
    path: '',
    component: RideSearchPage,
  },
  {
    path: 'ride-accepted',
    loadChildren: () => import('./ride-accepted/ride-accepted.module').then(m => m.RideAcceptedPageModule),
  },
  {
    path: 'ride-search-results',
    loadChildren: () => import('./ride-search-results/ride-search-results.module').then(m => m.RideSearchResultsPageModule),
  },
  {
    path: 'ride-search-details',
    loadChildren: () => import('./ride-search-details/ride-search-details.module').then(m => m.RideSearchDetailsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RideSearchPageRoutingModule {}
