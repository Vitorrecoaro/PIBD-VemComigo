import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'ride-search',
    loadChildren: () => import('./pages/ride-search/ride-search.module').then(m => m.RideSearchPageModule),
  },
  {
    path: 'rides-history',
    loadChildren: () => import('./pages/ride-history/ride-history.module').then(m => m.RideHistoryPageModule),
  },
  {
    path: 'create-ride',
    loadChildren: () => import('./pages/create-ride/create-ride.module').then( m => m.CreateRidePageModule)
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

