import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ContactComponent } from './contact/contact.component';

import { LoginComponent } from './login/login.component';

import { TestimonialComponent } from './testimonial/testimonial.component';

import { UsedVehiclesComponent } from './vehicles/used-vehicles/used-vehicles.component';

import { CarrosserieComponent } from './services/carrosserie/carrosserie.component';
import { EntretienComponent } from './services/entretien/entretien.component';
import { MecaniqueComponent } from './services/mecanique/mecanique.component';

import { AdminSpaceComponent } from './admin-space/admin-space.component';
import { EmployeeSpaceComponent } from './employee-space/employee-space.component';
import { FilterVehiclesDirective } from '../../directive/filter-vehicles.directive';

import { VehiclesDetailsComponent } from './vehicles/vehicles-details/vehicles-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    VehiclesComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    TestimonialComponent,
    UsedVehiclesComponent,
    CarrosserieComponent,
    EntretienComponent,
    MecaniqueComponent,
    AdminSpaceComponent,
    EmployeeSpaceComponent,
    FilterVehiclesDirective,
    VehiclesDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'vehicles', component: VehiclesComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
      { path: 'admin-space', component: AdminSpaceComponent },
      { path: '', redirectTo: '/used-vehicles', pathMatch: 'full' },
      { path: 'used-vehicles', component: UsedVehiclesComponent },
      { path: 'vehicles-details', component: VehiclesDetailsComponent },

    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
