import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarVeiculoPage } from './cadastrar-veiculo.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarVeiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarVeiculoPageRoutingModule {}
