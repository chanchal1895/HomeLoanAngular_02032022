import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { AfterAdminLoginService } from 'src/app/Services/after-admin-login.service';
import { ExcelService } from 'src/app/Services/excel.service';

@Component({
  selector: 'app-after-admin-login',
  templateUrl: './after-admin-login.component.html',
  styleUrls: ['./after-admin-login.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AfterAdminLoginComponent implements OnInit {

  constructor(private router: Router, private adminService: AfterAdminLoginService, private excelService: ExcelService) { }
  users: any
  
  isTableExpanded = false;
  showBtn:boolean=false;
  
  // Initialize with default list of users							
  ngOnInit() {

    //  if(localStorage.getItem("username")!=null){							
    localStorage.setItem('status', 'all');
    this.adminService.getUsers(this.status)
      .subscribe((data) => {
        this.users = data
        console.log(data)
        localStorage.removeItem('status');
      });
      this.showBtn = true;
      
  
  }
  status: string = "";
  getAllList() {
    localStorage.setItem('status', 'all');
    this.status = localStorage.getItem('status') || '{}';
    console.log(this.status)
    this.adminService.getUsers(this.status)
      .subscribe((data) => {
        this.users = data
        console.log("component data ..." + data)
        // localStorage.removeItem('status');
      });
     
      this.showBtn = true;

  }
  getAprvList() {
    localStorage.setItem('status', 'aprv');
    this.status = localStorage.getItem('status') || '{}';
    console.log(this.status)
    this.adminService.getUsers(this.status)
      .subscribe((data) => {
        this.users = data

        console.log(data)
        // localStorage.removeItem('status');
      });
      this.showBtn = false;
  }
  getRjctList() {
    localStorage.setItem('status', 'rjct');
    this.status = localStorage.getItem('status') || '{}';
    console.log(this.status)
    this.adminService.getUsers(this.status)
      .subscribe((data) => {
        this.users = data

        console.log(data)
        // localStorage.removeItem('status');
      });
      this.showBtn = false;
  }

  exportAsXLSX(): void {
    if (confirm("Do you want to generate Excel?")) { 
    this.excelService.exportAsExcelFile(this.users, 'applicant_data');
  }
}
 

acceptForm(user: User) {

    if (confirm("Do you want to accept the application?")) {

      debugger

      console.log("accept Form");

      user.appStatus = "Aprv";

     

      // user.Remarks=(<HTMLInputElement>document.getElementById("acceptAppl")).value

      // user.remark = user.remark

      // console.log("user.remark......" + user.Remarks);

      console.log("user..."+ user);

      this.adminService.acceptForm(user).subscribe((data) => {

        alert("Details have been updated successfully!");

        this.getAllList();

        this.router.navigate(['afterAdminLogin']);

      });

    }



  }

  rjctAppl(user: User) {

    if (confirm("Do you want to reject the application?")) {

      console.log("reject form")

      user.appStatus = "Rjct"

      this.adminService.rejectForm(user).subscribe((data) => {

        alert("Details have been updated successfully!");

        this.getAllList();

        this.router.navigate(['afterAdminLogin']);

      });

    }

  }
						
logOutUser(): void {
  if(localStorage.getItem("username") != null) {
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
