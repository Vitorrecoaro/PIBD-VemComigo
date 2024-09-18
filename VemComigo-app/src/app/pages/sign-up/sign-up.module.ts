import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';
import { SharedModule } from '../../shared/shared.module';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SignUpPageRoutingModule, SharedModule, SharedDirectivesModule],
  declarations: [SignUpPage],
})
export class SignUpPageModule {}
