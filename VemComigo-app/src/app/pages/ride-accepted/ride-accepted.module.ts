import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RideAcceptedPageRoutingModule } from './ride-accepted-routing.module';

import { RideAcceptedPage } from './ride-accepted.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RideAcceptedPageRoutingModule, SharedModule],
  declarations: [RideAcceptedPage],
})
export class RideAcceptedPageModule {}
