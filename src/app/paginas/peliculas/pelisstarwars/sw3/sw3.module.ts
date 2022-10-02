import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {RouterModule} from '@angular/router'
import { Sw3PageRoutingModule } from './sw3-routing.module';

import { Sw3Page } from './sw3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sw3PageRoutingModule,
    RouterModule
  ],
  declarations: [Sw3Page]
})
export class Sw3PageModule {}
