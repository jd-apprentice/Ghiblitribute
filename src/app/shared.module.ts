import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { FilmService } from './services/film.service';
import { LocationService } from './services/location.service';
import { PeopleService } from './services/people.service';
import { SpeciesService } from './services/species.service';
import { VehiclesService } from './services/vehicle.service';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './views/error/error.component';
import { RouterModule } from '@angular/router';
import { FilmsComponent } from './views/films/films.component';
import { PeopleComponent } from './views/people/people.component';
import { SpeciesComponent } from './views/species/species.component';
import { LocationsComponent } from './views/locations/locations.component';
import { VehiclesComponent } from './views/vehicles/vehicles.component';
import { FilmComponent } from './components/film/film.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    ErrorComponent, 
    HeaderComponent,
    FilmsComponent,
    PeopleComponent,
    SpeciesComponent,
    LocationsComponent,
    VehiclesComponent,
    FilmComponent
  ],
  providers: [
    FilmService,
    LocationService,
    PeopleService,
    SpeciesService,
    VehiclesService
  ],
})
export class SharedModule { }
