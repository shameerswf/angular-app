import {Component} from '@angular/core';
import {User} from './user';

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'exponentialStrength'})


@Component({
    templateUrl: './user.component.html'
})
export class UserComponent{
    users = [
      new User('Shameer', 20),
      new User('Kester', 22),
      new User('Deb', 30)
    ];

birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

}
