import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hp2PageRoutingModule } from './hp2-routing.module';

import { Hp2Page } from './hp2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hp2PageRoutingModule
  ],
  declarations: [Hp2Page]
})
export class Hp2PageModule {}
