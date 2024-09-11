import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaronaAceitaPageRoutingModule } from './carona-aceita-routing.module';

import { CaronaAceitaPage } from './carona-aceita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaronaAceitaPageRoutingModule
  ],
  declarations: [CaronaAceitaPage]
})
export class CaronaAceitaPageModule {}
