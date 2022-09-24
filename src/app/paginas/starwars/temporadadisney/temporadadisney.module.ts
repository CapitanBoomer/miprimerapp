import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemporadadisneyPageRoutingModule } from './temporadadisney-routing.module';

import { TemporadadisneyPage } from './temporadadisney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemporadadisneyPageRoutingModule
  ],
  declarations: [TemporadadisneyPage]
})
export class TemporadadisneyPageModule {}
