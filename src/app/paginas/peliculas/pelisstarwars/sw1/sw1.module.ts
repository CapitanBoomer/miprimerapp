import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SW1PageRoutingModule } from './sw1-routing.module';

import { SW1Page } from './sw1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SW1PageRoutingModule,
    RouterModule
  ],
  declarations: [SW1Page]
})
export class SW1PageModule {}
