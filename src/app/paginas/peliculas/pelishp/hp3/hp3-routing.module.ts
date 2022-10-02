import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hp3Page } from './hp3.page';

const routes: Routes = [
  {
    path: '',
    component: Hp3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hp3PageRoutingModule {}
