import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarVeiculoPageRoutingModule } from './cadastrar-veiculo-routing.module';

import { CadastrarVeiculoPage } from './cadastrar-veiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarVeiculoPageRoutingModule
  ],
  declarations: [CadastrarVeiculoPage]
})
export class CadastrarVeiculoPageModule {}
