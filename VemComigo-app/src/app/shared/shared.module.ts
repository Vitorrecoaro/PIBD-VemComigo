import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '../components/generic/input-text/input-text.component';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from '../components/generic/button/button.component';
import { UserResumedDetailsComponent } from '../components/user-resumed-details/user-resumed-details.component';
import { CarResumedDetailsComponent } from '../components/car-resumed-details/car-resumed-details.component';
import { UserCardComponent } from '../components/user-card/user-card.component';

@NgModule({
  declarations: [InputTextComponent, ButtonComponent, UserResumedDetailsComponent, CarResumedDetailsComponent, UserCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputTextComponent, ButtonComponent, UserResumedDetailsComponent, CarResumedDetailsComponent, UserCardComponent],
})
export class SharedModule {}
