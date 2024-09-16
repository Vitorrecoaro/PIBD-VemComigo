import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '../components/generic/input-text/input-text.component';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from '../components/generic/button/button.component';
import { RideDetailedCardComponent } from '../components/ride-detailed-card/ride-detailed-card.component';
import { CarCardComponent } from '../components/car-card/car-card.component';
import { CarResumedDetailsComponent } from '../components/car-resumed-details/car-resumed-details.component';
import { AddVehicleModalComponent } from '../components/modals/add-vehicle-modal/add-vehicle-modal.component';

@NgModule({
  declarations: [
    InputTextComponent,
    ButtonComponent,
    RideDetailedCardComponent,
    CarCardComponent,
    CarResumedDetailsComponent,
    AddVehicleModalComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    InputTextComponent,
    ButtonComponent,
    RideDetailedCardComponent,
    CarCardComponent,
    CarResumedDetailsComponent,
    AddVehicleModalComponent,
  ],
})
export class SharedModule {}
