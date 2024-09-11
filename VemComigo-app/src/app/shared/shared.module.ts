import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '../components/generic/input-text/input-text.component';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from '../components/generic/button/button.component';
import { BottomNavBarComponent } from '../components/bottom-nav-bar/bottom-nav-bar.component';

@NgModule({
  declarations: [InputTextComponent, ButtonComponent, BottomNavBarComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputTextComponent, ButtonComponent, BottomNavBarComponent],
})
export class SharedModule {}
