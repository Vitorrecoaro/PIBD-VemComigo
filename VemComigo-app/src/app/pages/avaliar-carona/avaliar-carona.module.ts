import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvaliarCaronaPageRoutingModule } from './avaliar-carona-routing.module';

import { AvaliarCaronaPage } from './avaliar-carona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvaliarCaronaPageRoutingModule
  ],
  declarations: [AvaliarCaronaPage]
})
export class AvaliarCaronaPageModule {}
