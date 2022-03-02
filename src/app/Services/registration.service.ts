import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  baseUrl:string="http://localhost:8080/userregistration/";
  constructor(private httpSer : HttpClient) { }

   public addUser(user: User){
     console.log(user);
     console.log(this.httpSer.post(this.baseUrl.concat("addUser"), user));
    return this.httpSer.post(this.baseUrl.concat("addUser"), user);
   }
}
