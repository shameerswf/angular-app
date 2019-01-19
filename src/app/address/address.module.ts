import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AddressComponent } from './address.component';

@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AddressComponent]
})
export class AddressModule { }
