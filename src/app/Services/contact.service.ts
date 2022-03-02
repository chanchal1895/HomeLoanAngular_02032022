import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';


@Injectable({
  providedIn: 'root'
})
export class ContactService {


  baseUrl:string="http://localhost:8080/userregistration/";
  constructor(private httpSer : HttpClient) {

   }

   public addContactUsInfo(user: User){
     console.log(user);
     console.log(this.httpSer.post(this.baseUrl.concat("savecontactusinfo"), user));
    return this.httpSer.post(this.baseUrl.concat("savecontactusinfo"), user);
   }

  
}
