import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RideSearchDetailsPageRoutingModule } from './ride-search-details-routing.module';

import { RideSearchDetailsPage } from './ride-search-details.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';
import { RideCardComponent } from 'src/app/components/ride-card/ride-card.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RideSearchDetailsPageRoutingModule, SharedModule, SharedDirectivesModule],
  declarations: [RideSearchDetailsPage, RideCardComponent],
})
export class RideSearchDetailsPageModule {}
