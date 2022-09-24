import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrecuelasPage } from './precuelas.page';

const routes: Routes = [
  {
    path: '',
    component: PrecuelasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrecuelasPageRoutingModule {}
