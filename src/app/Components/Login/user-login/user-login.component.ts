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
  ngOnInit(): void {
    this.userLoginForm = this.formBuilder.group({
      primaryEmail: ['', Validators.required],
      password: ['', Validators.required],
      formName:['Login']
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
        if (data == 0) { alert("success")
        this.router.navigate(['afterUserLogin']);   }
        else { alert("Username or Passord invalid") }        
      });
  }

}
