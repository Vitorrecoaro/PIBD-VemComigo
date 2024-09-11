import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasCaronasPageRoutingModule } from './minhas-caronas-routing.module';

import { MinhasCaronasPage } from './minhas-caronas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasCaronasPageRoutingModule
  ],
  declarations: [MinhasCaronasPage]
})
export class MinhasCaronasPageModule {}
