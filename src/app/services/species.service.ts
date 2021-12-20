import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Species } from '../models/species';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

baseUrl: string = 'https://ghibliapi.herokuapp.com/species';

getSpecies(): Observable<Species[]> {
  return this.http.get<Species[]>(this.baseUrl)
}

getSpeciesById(id: number): Observable<Species> {
  return this.http.get<Species>(this.baseUrl + '/' + id)
}

constructor(private http: HttpClient) { }

}