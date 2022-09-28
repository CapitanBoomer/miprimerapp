import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SW1Page } from './sw1.page';

const routes: Routes = [
  {
    path: '',
    component: SW1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SW1PageRoutingModule {}
