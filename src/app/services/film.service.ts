import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FilmService {

baseUrl: string = 'https://ghibliapi.herokuapp.com/films';

getFilms(): Observable<Film[]> {
  return this.http.get<Film[]>(this.baseUrl)
}

getFilmsWithLimit(limit: number): Observable<Film[]> {
  return this.http.get<Film[]>(this.baseUrl + '?limit=' + limit)
}

getFilmById(id: number): Observable<Film> {
  return this.http.get<Film>(this.baseUrl + '/' + id)
}

constructor(private http: HttpClient) { }

}
