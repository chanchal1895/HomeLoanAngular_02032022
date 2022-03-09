import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getCountries, getStates } from 'country-state-picker';
import { UserLoginService } from './Services/user-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userService:UserLoginService, public router:Router){
  }
 
  title = 'HomeLoanProject';
  clicked:boolean=false;
  // onLogin(){
   
  //   if(localStorage.getItem('userResId')!=null){
  //     this.clicked=true;
  //   }
   
  //}


 
  // onLogout(){
  //   console.log("from onLogout()");
  //   this.clicked=false;
  //   localStorage.removeItem('userResId');

  // }

  getUserName(){

    return localStorage.getItem('userResId');

}

getAdmin(){

  console.log(localStorage.getItem('userResId')+"Admin nnnnnnnnnnnnnnnn ")

  return localStorage.getItem('userResId');

}

onLogout() {

  localStorage.removeItem('userResId');

 

  this.router.navigate(['/home']);

}
}
let countries = getCountries();
console.log(countries);

let state = getStates("in");
console.log(state);