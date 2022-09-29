import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sw2Page } from './sw2.page';

const routes: Routes = [
  {
    path: '',
    component: Sw2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sw2PageRoutingModule {}
