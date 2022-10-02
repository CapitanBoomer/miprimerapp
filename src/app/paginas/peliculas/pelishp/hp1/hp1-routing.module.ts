import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hp1Page } from './hp1.page';

const routes: Routes = [
  {
    path: '',
    component: Hp1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hp1PageRoutingModule {}
