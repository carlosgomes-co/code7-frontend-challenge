import { Component, OnInit } from '@angular/core';
import { filmes } from '@data/filmes';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {
  public filmes;

  constructor() { }

  ngOnInit(): void {
    this.filmes = filmes;
    console.log('this.filmes', this.filmes);
  }

}
