import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAlumnosPageRoutingModule } from './detalle-alumnos-routing.module';

import { DetalleAlumnosPage } from './detalle-alumnos.page';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../service/api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAlumnosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [DetalleAlumnosPage],
  providers: [ApiService]
})
export class DetalleAlumnosPageModule {}
