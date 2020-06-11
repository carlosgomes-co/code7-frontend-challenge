import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '@movies/types';
import { fade } from '@shared/animations/fade';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  animations: [fade]
})
export class MovieComponent implements OnInit {

  @Input() data: Movie;

  constructor() { }

  ngOnInit(): void {
    this.data = {
      ...this.data,
      director: this.data.director.split(' '),
      rating: this.data.rating.split('')
    };
  }

}
