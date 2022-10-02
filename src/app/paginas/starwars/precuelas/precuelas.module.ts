import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PrecuelasPageRoutingModule } from './precuelas-routing.module';

import { PrecuelasPage } from './precuelas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrecuelasPageRoutingModule,
    RouterModule
  ],
  declarations: [PrecuelasPage]
})
export class PrecuelasPageModule {}
