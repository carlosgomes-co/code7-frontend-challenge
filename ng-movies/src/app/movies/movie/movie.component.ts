import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '@movies/types';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() data: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
