import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { People } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

baseUrl: string = 'https://ghibliapi.herokuapp.com/people';

getPeople(): Observable<People[]> {
  return this.http.get<People[]>(this.baseUrl)
}

getPeopleById(id: number): Observable<People> {
  return this.http.get<People>(this.baseUrl + '/' + id)
}

constructor(private http: HttpClient) { }

}