import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RideSearchPageRoutingModule } from './ride-search-routing.module';

import { RideSearchPage } from './ride-search.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { RideSearchCardComponent } from 'src/app/components/ride-search-card/ride-search-card.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RideSearchPageRoutingModule, SharedModule],
  declarations: [RideSearchPage, RideSearchCardComponent],
})
export class RideSearchPageModule {}
