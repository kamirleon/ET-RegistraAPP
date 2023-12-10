import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperaClavePageRoutingModule } from './recupera-clave-routing.module';

import { RecuperaClavePage } from './recupera-clave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperaClavePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RecuperaClavePage]
})
export class RecuperaClavePageModule {}
