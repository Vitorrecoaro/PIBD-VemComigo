import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RideHistoryPageRoutingModule } from './ride-history-routing.module';

import { RideHistoryPage } from './ride-history.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RideHistoryPageRoutingModule, SharedModule],
  declarations: [RideHistoryPage],
})
export class RideHistoryPageModule {}
