import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userloginServ: UserLoginService) { }

  userLoginForm: any;
  authenticate:boolean=false;
  ngOnInit(): void {
    this.userLoginForm = this.formBuilder.group({
      primaryEmail: ['', Validators.required],
      password: ['', Validators.required],
      formName: ['Login']
    })
  }
  get primaryEmail() {
    return this.userLoginForm.get('primaryEmail');
  }
  get password() {
    return this.userLoginForm.get('password');
  }

  onSubmit() {
   
    
    this.userloginServ.validateUser(this.userLoginForm.value)
      .subscribe(data => {
        console.log(data)
        if (data == 1) { alert("Username or Passord invalid") ;
        this.authenticate=false;
        console.log( this.authenticate);
      
      }
    

        else {
          this.router.navigate(['afterUserLogin']);
          this.authenticate=true;
        console.log( this.authenticate);
          console.log( JSON.stringify(data))
          localStorage.setItem('userResId', JSON.stringify(data))
        }
      
      });
    
  }

}
