import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmesRouterModule } from '@filmes/filmes-routing.module';
import { FilmesComponent } from './filmes.component';

@NgModule({
  declarations: [FilmesComponent],
  imports: [CommonModule, FilmesRouterModule],
  exports: [FilmesComponent]
})
export class FilmesModule { }
