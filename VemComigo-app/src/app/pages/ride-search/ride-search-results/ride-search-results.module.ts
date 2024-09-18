import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RideSearchResultsPageRoutingModule } from './ride-search-results-routing.module';

import { RideSearchResultsPage } from './ride-search-results.page';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';
import { RidesFilterComponent } from 'src/app/components/rides-filter/rides-filter.component';
import { RideResumedCardComponent } from 'src/app/components/ride-resumed-card/ride-resumed-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RideSearchResultsPageRoutingModule, SharedDirectivesModule, SharedModule],
  declarations: [RideSearchResultsPage, RidesFilterComponent, RideResumedCardComponent],
})
export class RideSearchResultsPageModule {}
