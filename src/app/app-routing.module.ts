import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { DetailApartmentComponent } from './detail-apartment/detail-apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ResidencesComponent },
  { path: 'addResidence', component: FormResidenceComponent },
  { path: 'residence/:residenceId/apartments', component: ApartmentsComponent },
  { path: 'addApartment', component: FormApartmentComponent },
  { path: 'apartment/:id', component: DetailApartmentComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
