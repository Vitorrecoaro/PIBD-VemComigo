import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RideSearchPageRoutingModule } from './ride-search-routing.module';

import { RideSearchPage } from './ride-search.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserCardComponent } from 'src/app/components/user-card/user-card.component';
import { DriverCardComponent } from 'src/app/components/driver-card/driver-card.component';
import { RideCardComponent } from 'src/app/components/ride-card/ride-card.component';
import { RideSearchCardComponent } from 'src/app/components/ride-search-card/ride-search-card.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RideSearchPageRoutingModule, SharedModule],
  declarations: [RideSearchPage, UserCardComponent, DriverCardComponent, RideCardComponent, RideSearchCardComponent],
})
export class RideSearchPageModule {}
