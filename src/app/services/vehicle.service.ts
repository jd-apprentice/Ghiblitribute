import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

baseUrl: string = 'https://ghibliapi.herokuapp.com/vehicles';

getVehicles(): Observable<Vehicle[]> {
  return this.http.get<Vehicle[]>(this.baseUrl)
}

getVehiclesById(id: number): Observable<Vehicle> {
  return this.http.get<Vehicle>(this.baseUrl + '/' + id)
}

constructor(private http: HttpClient) { }

}