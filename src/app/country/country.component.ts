import {Component} from '@angular/core';
import {Country} from './country';
import { CountryService } from './country.service';
import { OnInit } from '@angular/core';
import { COUNTRIES } from './mock-country';

@Component({
    selector : 'country-app',
    templateUrl: './country.component.html'
})
export class CountryComponent implements OnInit {
countries : Country [];
constructor(private countryService: CountryService) { }

getCountries(): void {
    this.countryService.getCountries().then(countries => this.countries = countries);
  }
ngOnInit(): void {
    this.getCountries();
  }
}
