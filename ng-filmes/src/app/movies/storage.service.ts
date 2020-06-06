import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { movies } from '@data/movies';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  /* Movies */
  public movies: any[];

  /* Movies loaded */
  public loaded = new Subject<any>();

  /* Has Movies? */
  public hasMovies = false;

  constructor(private httpClient: HttpClient) {
    this.getLocal('movies').then(localMovies => {
      /* Has movies? */
      if (localMovies) {
        this.movies = localMovies;
        this.hasMovies = true;
        this.loaded.next(this.movies);
      } else {
        this.load().then(data => this.save(data));
      }
    });
  }

  /**
   * Load Movies data
   */
  private async load(): Promise<any> {
    const movieData = movies
      .slice(0, 5)
      .map(id => this.httpClient.get<any>(`https://json.smappi.org/adw0rd/imdb-movie/movie?id=${id}`).toPromise());
    console.log('movieData', movieData);
    return Promise.all(movieData.slice(0, 5));
  }

  /**
   * Save value to localStorage using key
   * @param key key
   * @param value object
   */
  private saveLocal(key: string, value: any): void {
    const str = JSON.stringify(value);
    localStorage.setItem(key, str);
  }

  /**
   * Get localStorage value by key
   * @param key name
   * @returns Promise
   */
  private getLocal(key: string): Promise<any> {
    return new Promise((resolve) => {
      const value = localStorage.getItem(key);
      if (value) {
        resolve(JSON.parse(value));
      } else {
        resolve(false);
      }
    });
  }

  /**
   * Return Movies
   * @returns Promise
   */
  public async get(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.movies);
    });
  }

  /**
   * Save movies on localStorage
   * @param data any[]
   * @returns Promise
   */
  public async save(data: any[]): Promise<any> {
    return new Promise((resolve) => {
      this.movies = data;
      this.hasMovies = true;
      this.saveLocal('movies', data);
      this.loaded.next(this.movies);
      resolve();
    });
  }
}
