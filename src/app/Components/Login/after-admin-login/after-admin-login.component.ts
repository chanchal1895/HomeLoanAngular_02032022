import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { AfterAdminLoginService } from 'src/app/Services/after-admin-login.service';

@Component({
  selector: 'app-after-admin-login',
  templateUrl: './after-admin-login.component.html',
  styleUrls: ['./after-admin-login.component.css']
})
export class AfterAdminLoginComponent implements OnInit {
  users:any

  constructor(private router: Router, private adminService: AfterAdminLoginService) { }

  // Initialize with default list of users							
  ngOnInit() {
    //  if(localStorage.getItem("username")!=null){							

    this.adminService.getUsers()
      .subscribe((data ) => {this.users = data 

        console.log(data)
      });
  }
  //     else							
  //     this.router.navigate(['/login']);			
  //   }		

  // logOff user							
  logOutUser(): void {
    if (localStorage.getItem("username") != null) {
      localStorage.removeItem("username");
      this.router.navigate(['/login']);
    }
  }

  // Add New User	
  addUser(): void {
    this.router.navigate(['add-user']);
  }

  // edit USer						
  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    //localStorage.setItem("editUserId", user.id.toString());						
    this.router.navigate(['edit-user']);
  };

}
