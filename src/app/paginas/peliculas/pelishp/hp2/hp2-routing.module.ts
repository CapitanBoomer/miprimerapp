import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hp2Page } from './hp2.page';

const routes: Routes = [
  {
    path: '',
    component: Hp2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hp2PageRoutingModule {}
