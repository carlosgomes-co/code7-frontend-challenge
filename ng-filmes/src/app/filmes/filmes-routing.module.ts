import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmesComponent } from '@filmes/filmes.component';

const routes: Routes = [
  { path: '', component: FilmesComponent }
  // { path: ':id', loadChildren: '@establishments/details/details.module#DetailsModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmesRouterModule { }
