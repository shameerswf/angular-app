import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CountryComponent } from './country.component';
import { CountryService } from './country.service';

@NgModule({
  declarations: [
    CountryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CountryComponent]
})
export class CountryModule { }
