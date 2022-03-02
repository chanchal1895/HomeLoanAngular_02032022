import { Component } from '@angular/core';
import { getCountries, getStates } from 'country-state-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HomeLoanProject';
}
let countries = getCountries();
console.log(countries);

let state = getStates("in");
console.log(state);