import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarCaronaPageRoutingModule } from './criar-carona-routing.module';

import { CriarCaronaPage } from './criar-carona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarCaronaPageRoutingModule
  ],
  declarations: [CriarCaronaPage]
})
export class CriarCaronaPageModule {}
