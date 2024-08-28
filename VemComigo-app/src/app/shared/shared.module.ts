import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '../components/generic/input-text/input-text.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [InputTextComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [InputTextComponent]
})
export class SharedModule { }
