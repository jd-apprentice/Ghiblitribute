import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  films!: Film[];
  filmsPerPage: number = 9;

  constructor(private service: FilmService) {}

  ngOnInit() {
    this.service.getFilmsWithLimit(this.filmsPerPage).subscribe((films) => {
      this.films = films;
    });
  }
}
