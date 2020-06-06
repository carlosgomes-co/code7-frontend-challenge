import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MoviesRouterModule } from '@movies/movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MoviesRouterModule
  ],
  exports: [MoviesComponent]
})
export class MoviesModule { }
