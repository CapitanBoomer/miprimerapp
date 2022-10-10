import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
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
    path: 'coleccion',
    loadChildren: () => import('./paginas/coleccion/coleccion.module').then( m => m.ColeccionPageModule)
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
    path: 'sw1',
    loadChildren: () => import('./paginas/peliculas/pelisstarwars/sw1/sw1.module').then( m => m.SW1PageModule)
  },
  {
    path: 'sw2',
    loadChildren: () => import('./paginas/peliculas/pelisstarwars/sw2/sw2.module').then( m => m.Sw2PageModule)
  },
  {
    path: 'sw3',
    loadChildren: () => import('./paginas/peliculas/pelisstarwars/sw3/sw3.module').then( m => m.Sw3PageModule)
  },

  {
    path: 'sagahp',
    loadChildren: () => import('./paginas/Hp/saga/saga.module').then( m => m.SagaPageModule)
  },
  {
    path: 'hp1',
    loadChildren: () => import('./paginas/peliculas/pelishp/hp1/hp1.module').then( m => m.Hp1PageModule)
  },
  {
    path: 'hp2',
    loadChildren: () => import('./paginas/peliculas/pelishp/hp2/hp2.module').then( m => m.Hp2PageModule)
  },
  {
    path: 'hp3',
    loadChildren: () => import('./paginas/peliculas/pelishp/hp3/hp3.module').then( m => m.Hp3PageModule)
  },











];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
