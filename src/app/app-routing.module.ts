import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './views/error/error.component';
import { FilmsComponent } from './views/films/films.component';
import { HomeComponent } from './views/home/home.component';
import { LocationsComponent } from './views/locations/locations.component';
import { PeopleComponent } from './views/people/people.component';
import { SpeciesComponent } from './views/species/species.component';
import { VehiclesComponent } from './views/vehicles/vehicles.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'films',
    component: FilmsComponent,
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'species',
    component: SpeciesComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'vehicles',
    component: VehiclesComponent
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
