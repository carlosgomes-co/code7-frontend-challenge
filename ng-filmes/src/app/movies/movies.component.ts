import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

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
  public movies: any[];

  /* Loading movies? */
  public loading = true;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.hasMovies) {
      this.movies = this.storageService.movies;
      this.loading = false;
    } else {
      this.moviesLoaded$ = this.storageService.loaded.subscribe(data => {
        this.movies = data;
        this.loading = false;
      });
    }
    console.log('this.movies', this.movies);
  }

  ngOnDestroy() {
    if (this.moviesLoaded$) { this.moviesLoaded$.unsubscribe(); }
  }

}
