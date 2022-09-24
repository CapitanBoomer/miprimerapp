import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemporadadisneyPage } from './temporadadisney.page';

const routes: Routes = [
  {
    path: '',
    component: TemporadadisneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemporadadisneyPageRoutingModule {}
