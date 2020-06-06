import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Movie } from '@movies/types';
import { StorageService } from '@movies/storage.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  /* Movies loaded subscription */
  private moviesLoaded$: Subscription;

  /* Movies Array */
  public movies: Movie[];

  /* Loading movies? */
  public loading = true;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.hasData) {
      this.movies = this.storageService.data;
      this.loading = false;
    } else {
      this.moviesLoaded$ = this.storageService.loaded.subscribe((data: Movie[]) => {
        this.movies = data;
        this.loading = false;
      });
    }
  }

  ngOnDestroy() {
    if (this.moviesLoaded$) { this.moviesLoaded$.unsubscribe(); }
  }

}
