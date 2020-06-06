import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from '@movies/movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent }
  // { path: ':id', loadChildren: '@establishments/details/details.module#DetailsModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRouterModule { }
