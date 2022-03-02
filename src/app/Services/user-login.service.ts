import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  baseUrl:string="http://localhost:8080/userregistration/";
  constructor(private httpSer : HttpClient) { }

  public validateUser(user:User){
    
    console.log(user);
    console.log(this.httpSer.post(this.baseUrl.concat("validate"), user));
    return this.httpSer.post(this.baseUrl.concat("validate"), user);
  }
}
