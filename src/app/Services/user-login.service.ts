import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  baseUrl: string = "http://localhost:8080/userregistration/";
  constructor(private httpSer: HttpClient) { }

  public validateUser(user: User) {

    console.log(user);
    console.log(this.httpSer.post(this.baseUrl.concat("validate"), user));
    return this.httpSer.post(this.baseUrl.concat("validate"), user);
  }

  // Get User Details			
  getUserById(id: string) {
    const params = new HttpParams()
      .set('id', id)
    console.log(id);
    console.log("Inside service  "+ this.httpSer.get<User>(this.baseUrl.concat("userHome/"), { params }))
    return this.httpSer.get<User[]>(this.baseUrl.concat("userHome/"), { params });

  }

  
  
updateUserMobileNo(user:User){
  
  return this.httpSer.put(this.baseUrl.concat("updateUserDetails"), user);

}

}
