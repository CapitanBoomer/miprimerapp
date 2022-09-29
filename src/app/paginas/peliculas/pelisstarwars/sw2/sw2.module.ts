import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sw2PageRoutingModule } from './sw2-routing.module';

import { Sw2Page } from './sw2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sw2PageRoutingModule
  ],
  declarations: [Sw2Page]
})
export class Sw2PageModule {}
