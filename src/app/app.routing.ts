import { CustomersSideComponent } from './components/side/customers-side/customers-side.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "app/components/home/home.component";
import { ProvincesComponent } from "app/components/crud/provinces/provinces.component";
import { CountriesComponent } from './components/crud/countries/countries.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CountriesSideComponent } from 'app/components/side/countries-side/countries-side.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'customers', component: CustomersComponent},
    {path: 'customersside', component: CustomersSideComponent, outlet: 'side'},
    {path: 'countries', component: CountriesComponent},
    {path: 'countriesside', component: CountriesSideComponent, outlet: 'side'},
    {path: 'provinces', component: ProvincesComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}
