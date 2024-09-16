import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RideSearchPageRoutingModule } from './ride-search-routing.module';

import { RideSearchPage } from './ride-search.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { RideSearchCardComponent } from 'src/app/components/ride-search-card/ride-search-card.component';
import { RidesFilterComponent } from 'src/app/components/rides-filter/rides-filter.component';
import { UserCardComponent } from 'src/app/components/user-card/user-card.component';
import { UserResumedDetailsComponent } from 'src/app/components/user-resumed-details/user-resumed-details.component';
import { DriverCardComponent } from 'src/app/components/driver-card/driver-card.component';
import { RideResumedCardComponent } from 'src/app/components/ride-resumed-card/ride-resumed-card.component';
import { RideCardComponent } from 'src/app/components/ride-card/ride-card.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RideSearchPageRoutingModule, SharedModule],
  declarations: [
    RideSearchPage,
    RideSearchCardComponent,
    RideResumedCardComponent,
    RidesFilterComponent,
    UserResumedDetailsComponent,
    UserCardComponent,
    DriverCardComponent,
    RideCardComponent,
  ],
})
export class RideSearchPageModule {}
