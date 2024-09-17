import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RideSearchPage } from './ride-search.page';

const routes: Routes = [
  {
    path: '',
    component: RideSearchPage
  },  {
    path: 'ride-search-results',
    loadChildren: () => import('./ride-search-results/ride-search-results.module').then( m => m.RideSearchResultsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RideSearchPageRoutingModule {}
