import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FasesPageRoutingModule } from './fases-routing.module';

import { FasesPage } from './fases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FasesPageRoutingModule
  ],
  declarations: [FasesPage]
})
export class FasesPageModule {}
