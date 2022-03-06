import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AfterAdminLoginService {
  baseUrl:string="http://localhost:8080/userregistration/";
  constructor(private httpSer:HttpClient) { }
// Get All Users

  public getUsers(){

    console.log("Get All users : "+this.httpSer.get<User[]>(this.baseUrl.concat("userList")));
    
    return this.httpSer.get<User[]>(this.baseUrl.concat("userList"));
  }

  getUserById(id: string) {
    const params = new HttpParams()
      .set('id', id)
    console.log(id);
    console.log("Inside service  "+ this.httpSer.get<User>(this.baseUrl.concat("userHome/"), { params }))
    return this.httpSer.get<User[]>(this.baseUrl.concat("userHome/"), { params });

  }

    // Create User							
  //   createUser(user: User) {							
  //     return this.httpSer.post(this.baseUrl, user);							
  //   }			
  
   // Modify User				
  // updateUser(user: User) {				
  //       return this.httpSer.put(this.baseUrl + '/' + user.id, user);				
  //     }	

    // Get User By Id			
//   getUserById(id: number){			
//       return this.httpSer.get<User>(this.baseUrl+'/'+id);			
//     }		

}
