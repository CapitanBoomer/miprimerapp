import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OriginalesPage } from './originales.page';

const routes: Routes = [
  {
    path: '',
    component: OriginalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OriginalesPageRoutingModule {}
