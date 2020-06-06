import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { movies } from '@data/movies';
import { Movie } from '@movies/types';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  /* Movies data */
  public data: Movie[];

  /* Movies loaded */
  public loaded = new Subject<any>();

  /* Has Movies? */
  public hasData = false;

  constructor(private httpClient: HttpClient) {
    this.getLocal('movies').then((data: Movie[]) => {
      /* Has movies? */
      if (data) {
        this.data = data;
        this.hasData = true;
        this.loaded.next(this.data);
      } else {
        this.load(2).then(dataLoaded => this.save(dataLoaded));
      }
    });
  }

  /**
   * Generate random number between values
   * @param min Min value to random
   * @param max Max value to random
   */
  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   * Load Sorted Movies data
   */
  private async load(quantity: number): Promise<any> {
    const selectedMovies = [];
    while (quantity > 0) {
      const selected = this.getRandomInt(0, movies.length - 1);
      const alreadySelected = selectedMovies.indexOf(movies[selected]) >= 0;
      if (!alreadySelected) {
        selectedMovies.push(movies[selected]);
        quantity --;
      }
    }
    const url = 'https://json.smappi.org/adw0rd/imdb-movie/movie?id=';
    const movieData = selectedMovies.map(id => this.httpClient.get<any>(`${url}${id}`).toPromise());
    return Promise.all(movieData);
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
      resolve(this.data);
    });
  }

  /**
   * Save movies on localStorage
   * @param data any[]
   * @returns Promise
   */
  public async save(data: Movie[]): Promise<any> {
    return new Promise((resolve) => {
      this.data = data;
      this.hasData = true;
      this.saveLocal('movies', data);
      this.loaded.next(this.data);
      resolve();
    });
  }
}
