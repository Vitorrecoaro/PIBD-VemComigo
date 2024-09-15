import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '../components/generic/input-text/input-text.component';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from '../components/generic/button/button.component';
import { UserResumedDetailsComponent } from '../components/user-resumed-details/user-resumed-details.component';
import { CarResumedDetailsComponent } from '../components/car-resumed-details/car-resumed-details.component';

@NgModule({
  declarations: [InputTextComponent, ButtonComponent, UserResumedDetailsComponent, CarResumedDetailsComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputTextComponent, ButtonComponent, UserResumedDetailsComponent, CarResumedDetailsComponent],
})
export class SharedModule {}
