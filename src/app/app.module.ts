import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importer ReactiveFormsModule
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { DetailApartmentComponent } from './detail-apartment/detail-apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    FormResidenceComponent,
    ApartmentsComponent,
    FormApartmentComponent,
    DetailApartmentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule // Ajouter ReactiveFormsModule aux imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
