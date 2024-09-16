import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateRidePage } from './create-ride.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CreateRidePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class CreateRidePageRoutingModule {}
