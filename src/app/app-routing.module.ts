import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';

const routes: Routes = [
  {path: '', loadChildren:() => import('./pages/home/home.module').then(m => m.HomeModule) },
  {path: 'pokemon-page', loadChildren:() => import('./pages/pokemon-page/pokemon-page.module').then(m => m.PokemonPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
