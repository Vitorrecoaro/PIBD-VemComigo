import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '../components/generic/input-text/input-text.component';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from '../components/generic/button/button.component';
import { UserResumedDetailsComponent } from '../components/user-resumed-details/user-resumed-details.component';

@NgModule({
  declarations: [InputTextComponent, ButtonComponent, UserResumedDetailsComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputTextComponent, ButtonComponent, UserResumedDetailsComponent],
})
export class SharedModule {}
