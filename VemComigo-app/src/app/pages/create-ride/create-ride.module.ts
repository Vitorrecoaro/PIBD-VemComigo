import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateRidePageRoutingModule } from './create-ride-routing.module';

import { CreateRidePage } from './create-ride.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CreateRidePageRoutingModule, SharedModule],
  declarations: [CreateRidePage],
})
export class CreateRidePageModule {}
