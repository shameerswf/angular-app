
import { Injectable } from '@angular/core';
import { Country } from './country';
import { COUNTRIES } from './mock-country';

@Injectable()
export class CountryService  {

getCountries(): Promise<Country[]> {
    return Promise.resolve(COUNTRIES);
  }
}


