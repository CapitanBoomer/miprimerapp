import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'starwars',
    loadChildren: () => import('./paginas/starwars/fases/fases.module').then( m => m.FasesPageModule)
  },
  {
    path: 'precuelas',
    loadChildren: () => import('./paginas/starwars/precuelas/precuelas.module').then( m => m.PrecuelasPageModule)
  },
  {
    path: 'originales',
    loadChildren: () => import('./paginas/starwars/originales/originales.module').then( m => m.OriginalesPageModule)
  },
  {
    path: 'temporadadisney',
    loadChildren: () => import('./paginas/starwars/temporadadisney/temporadadisney.module').then( m => m.TemporadadisneyPageModule)
  },
  {
    path: 'saga',
    loadChildren: () => import('./paginas/tlotr/saga/saga.module').then( m => m.SagaPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
