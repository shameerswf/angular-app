import {Component} from '@angular/core';
import {Address} from './Address';

@Component({
    templateUrl: './address.component.html'
})
export class AddressComponent {
    countries = [
      new Address('100', 'Chatham park drive','15220'),
      new Address('200', 'Green Tree Road','15220'),
      new Address('600', 'Grant Street','15220')
    ];
}
