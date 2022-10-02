import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hp1PageRoutingModule } from './hp1-routing.module';

import { Hp1Page } from './hp1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hp1PageRoutingModule
  ],
  declarations: [Hp1Page]
})
export class Hp1PageModule {}
