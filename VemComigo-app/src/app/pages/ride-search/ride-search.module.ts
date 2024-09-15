import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RideSearchPageRoutingModule } from './ride-search-routing.module';

import { RideSearchPage } from './ride-search.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { RideSearchCardComponent } from 'src/app/components/ride-search-card/ride-search-card.component';
import { RideResumedComponent } from 'src/app/components/ride-resumed/ride-resumed.component';
import { RidesFilterComponent } from 'src/app/components/rides-filter/rides-filter.component';
import { CarResumedDetailsComponent } from 'src/app/components/car-resumed-details/car-resumed-details.component';
import { UserCardComponent } from 'src/app/components/user-card/user-card.component';
import { UserResumedDetailsComponent } from 'src/app/components/user-resumed-details/user-resumed-details.component';
import { DriverCardComponent } from 'src/app/components/driver-card/driver-card.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RideSearchPageRoutingModule, SharedModule],
  declarations: [
    RideSearchPage,
    RideSearchCardComponent,
    RideResumedComponent,
    RidesFilterComponent,
    UserResumedDetailsComponent,
    CarResumedDetailsComponent,
    UserCardComponent,
    DriverCardComponent,
  ],
})
export class RideSearchPageModule {}
