import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaronasDisponiveisPageRoutingModule } from './caronas-disponiveis-routing.module';

import { CaronasDisponiveisPage } from './caronas-disponiveis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaronasDisponiveisPageRoutingModule
  ],
  declarations: [CaronasDisponiveisPage]
})
export class CaronasDisponiveisPageModule {}
