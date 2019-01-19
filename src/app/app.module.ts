import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CountryComponent } from './country/country.component';
import { AddressComponent } from './address/address.component';

import { CountryService } from './country/country.service';

import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CountryComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
