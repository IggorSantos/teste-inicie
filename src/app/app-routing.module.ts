import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren:() => import('./pages/home/home.module').then(m => m.HomeModule) },
  {path: 'pokemon-page', loadChildren:() => import('./pages/pokemon-page/pokemon-page.module').then(m => m.PokemonPageModule) },
  {path: 'search', loadChildren:() => import('./pages/search/search.module').then(m => m.SearchModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
