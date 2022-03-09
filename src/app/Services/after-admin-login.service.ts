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

  public getUsers(status:string){
    const params = new HttpParams().set('status', status)
    console.log(status);
    console.log("Get All users : "+this.httpSer.get<User[]>(this.baseUrl.concat("userList/"), { params }));
    
    return this.httpSer.get<User[]>(this.baseUrl.concat("userList/"), { params });
  }

  getUserById(id: string) {
    const params = new HttpParams()
      .set('id', id)
    console.log(id);
    console.log("Inside service  "+ this.httpSer.get<User>(this.baseUrl.concat("userHome/"), { params }))
    return this.httpSer.get<User[]>(this.baseUrl.concat("userHome/"), { params });

  }

  //  Accept form				
   acceptForm(user: User) {		
     debugger
    console.log("Inside service  "+ this.httpSer.post(this.baseUrl.concat("updateUser"), user))
		// console.log(user.Remarks);
         return this.httpSer.post(this.baseUrl.concat("updateUser"), user);				
      }

    //Reject form				
   rejectForm(user: User) {	
    console.log("Inside service  "+ this.httpSer.post(this.baseUrl.concat("updateUser"), user))
			
        return this.httpSer.post(this.baseUrl.concat("updateUser"), user);				
     }


}
