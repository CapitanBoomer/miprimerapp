import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hp3PageRoutingModule } from './hp3-routing.module';

import { Hp3Page } from './hp3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hp3PageRoutingModule
  ],
  declarations: [Hp3Page]
})
export class Hp3PageModule {}
