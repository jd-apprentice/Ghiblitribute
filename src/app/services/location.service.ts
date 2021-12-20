import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

baseUrl: string = 'https://ghibliapi.herokuapp.com/locations';

getLocation(): Observable<Location[]> {
  return this.http.get<Location[]>(this.baseUrl)
}

getLocationById(id: number): Observable<Location> {
  return this.http.get<Location>(this.baseUrl + '/' + id)
}

constructor(private http: HttpClient) { }

}