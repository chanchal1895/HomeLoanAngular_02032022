import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Component({
  selector: 'app-after-user-login',
  templateUrl: './after-user-login.component.html',
  styleUrls: ['./after-user-login.component.css']
})
export class AfterUserLoginComponent implements OnInit {
  data: any;

  constructor(private router: Router, 
    private userService: UserLoginService,
    private formBuilder: FormBuilder) { }
  users: any;
  id: string = "";
  applStatus: string = "";
  submitted: boolean = false;
  contactForm:any; 
  

  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
      mobileNo: "",
    });

    if (localStorage.getItem('userResId') != null) {
      this.id = JSON.parse(localStorage.getItem('userResId') || '{}');
      console.log('Getting id from Local Storage: '+localStorage.getItem('userResId'));
      // this.id = localStorage.getItem('userResId')
      this.userService.getUserById(this.id)
        .subscribe(data => {
          this.users = data;
          console.log(data)
          console.log("From Ur",this.users.ur)

          console.log("Inside componenets  " + this.users)
          if (this.users.appStatus = "Ackn") {
            this.applStatus = "Your application is not yet approved."
          }
          else {
            this.applStatus = "Application is approved."
          }
        });
    }
    else {
      this.router.navigate(['/login']);
    }

  
  }
  
 
  
  
    
  
  onSubmit() {
//this.users.mobileNo=this.editUser.value;
console.log("mobile",this.users?.mobileNo)
    this.userService.updateUserMobileNo(this.users ).subscribe( ( result ) => {
      alert("Details has been submitted successfully !!" );				
            this.router.navigate(['afterUserLogin']);						
          
    } );

    
    
      	
  }

}
