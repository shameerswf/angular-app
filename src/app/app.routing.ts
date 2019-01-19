import { NgModule } from '@angular/core';
import { Routes,RouterModule }   from '@angular/router';
import { UserComponent } from './user/user.component';
import { CountryComponent } from './country/country.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
{ path: 'user', component: UserComponent },
{ path: 'country', component: CountryComponent },
{ path: 'address', component: AddressComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRouting { }

 //export const routingComponents = [UserComponent, CountryComponent, AddressComponent];
