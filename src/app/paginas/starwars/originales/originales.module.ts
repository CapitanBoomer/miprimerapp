import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { OriginalesPageRoutingModule } from './originales-routing.module';

import { OriginalesPage } from './originales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OriginalesPageRoutingModule,
    RouterModule
  ],
  declarations: [OriginalesPage]
})
export class OriginalesPageModule {}
