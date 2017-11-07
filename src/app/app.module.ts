import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { SideComponent } from './components/side/side.component';
import { ProvincesComponent } from './components/crud/provinces/provinces.component';
import { CountriesComponent } from "app/components/crud/countries/countries.component";
import { HomeSideComponent } from './components/side/home-side/home-side.component';
import { CustomersSideComponent } from './components/side/customers-side/customers-side.component';
import { CountriesSideComponent } from './components/side/countries-side/countries-side.component';
import { ProvincesSideComponent } from './components/side/provinces-side/provinces-side.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomersComponent,
    SideComponent,
    ProvincesComponent,
    CountriesComponent,
    HomeSideComponent,
    CustomersSideComponent,
    CountriesSideComponent,
    ProvincesSideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
