import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '../components/generic/input-text/input-text.component';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from '../components/generic/button/button.component';

@NgModule({
  declarations: [InputTextComponent, ButtonComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputTextComponent, ButtonComponent],
})
export class SharedModule {}
