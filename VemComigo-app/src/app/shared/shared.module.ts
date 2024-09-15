import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '../components/generic/input-text/input-text.component';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from '../components/generic/button/button.component';
import { RideDetailedCardComponent } from '../components/ride-detailed-card/ride-detailed-card.component';

@NgModule({
  declarations: [InputTextComponent, ButtonComponent, RideDetailedCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputTextComponent, ButtonComponent, RideDetailedCardComponent],
})
export class SharedModule {}
