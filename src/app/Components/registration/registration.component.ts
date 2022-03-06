import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { getCountries, getStates } from 'country-state-picker';
import { empty } from 'rxjs';
import { RegistrationService } from 'src/app/Services/registration.service';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private regservice:RegistrationService,private userloginServ: UserLoginService, private router: Router) { }
   submitted: boolean = false;
  contactForm:any;
  countryList : string[] = [] ;
  stateList : string[] = [] ;
  disabled: boolean = true;
  
  rate:number=0;
  tenure:any
  emi:any
  payment:any
  totIntPayable:any
  ngOnInit(): void {
//   let countries = getCountries();
// console.log(countries);
    this.countryList = getCountries();
    this.stateList = getStates("in");
    this.contactForm = this.formBuilder.group({
      id:[],
      firstname:  ['',[Validators.required, Validators.minLength(5)]],
      lastname: ['',[Validators.required,Validators.minLength(5)]],
      primaryEmail:['',[Validators.required,Validators.email]],
      gender: ['',[Validators.required]],
      mobileNo: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      currentLoc: ['',[Validators.required]],
      loanAmt: ['',[Validators.required,Validators.maxLength(10),Validators.minLength(7)]],
      country: ['',[Validators.required]],
      state: ['',[Validators.required]],
      loanTenure:['',[Validators.required]],
      password:['',[Validators.required]],
      formName:['Registration']
    })

  }
  

  get firstname() {
    return this.contactForm.get('firstname');
  }
  get lastname() {
    return this.contactForm.get('lastname');
  }
  get primaryEmail() {
    return this.contactForm.get('primaryEmail')
  }
   get gender() {
    return this.contactForm.get('gender');
  } 
  get mobileNo() {
    return this.contactForm.get('mobileNo');
  } 
  get currentLoc() {
    
    return this.contactForm.get('currentLoc');
  } 
  get loanAmt() {
    return this.contactForm.get('loanAmt');
  } 
  get country() {
    return this.contactForm.get('country');
  } 
get state(){
  return this.contactForm.get('state');
}
get loanTenure(){
  return this.contactForm.get('loanTenure');
}
get password(){
  return this.contactForm.get('password');
}
get loanTypeId(){
  console.log(this.contactForm.get('loanTypeId'));
  return this.contactForm.get('loanTypeId');
}
  onSubmit() {
    //  this.submitted = true;						
    //     if(this.contactForm.invalid){						
    //       return;						
       // }	
    if(confirm("Are you sure you want register?")){	
    this.contactForm.value.loanTypeId=localStorage.getItem('loanTypeId')
    
        this.regservice.addUser(this.contactForm.value)          
          .subscribe( data => {
      
          alert("Application has been submitted successfully !!" );      
            this.router.navigate(['registrationSuccess']);          
          });
     localStorage.removeItem('loanTypeId')      
      }  
    }

    onChange(){
      this.userloginServ.validateUser(this.contactForm.value)
      .subscribe(data => {
        console.log(data)
        if (data != 1) { alert("This email id is already registered. Login to continue.")
         this.router.navigate(['userLogin']);     
      }
              
      });
    }

    enableEmi(){
      
      if(this.contactForm.value.loanTenure == "" || this.contactForm.value.loanAmt == "" || 
         this.contactForm.value.loanTenure.invalid || this.contactForm.value.loanAmt.invalid){
        console.log("fail");
        this.disabled = true;
      }
      else{
       
        console.log("success");
        console.log(this.contactForm.value.loanTenure);
        console.log(this.contactForm.value.loanAmt);
        this.disabled = false;
        this.calcuateEmi();

      }

    }
    calcuateEmi(){
      
      if(this.contactForm.value.loanTenure == "" && this.contactForm.value.loanAmt == ""){
        console.log("fail");
        alert("Please fill in Loan Tenure and Loan Amount to calculate Emi.");
      }
      else{
       
        console.log("success");
        console.log(this.contactForm.value.loanTenure);
        this.disabled = false;

        //Calculation
      
        this.rate = this.rate / (12*100)
        this.rate = Math.round(this.rate*10000)/10000.0
        this.tenure = this.contactForm.value.loanTenure * 12
        this.emi = this.contactForm.value.loanAmt * this.rate * Math.pow(1+this.rate, this.tenure)/(Math.pow(1+this.rate, this.tenure)-1)
        this.emi = Math.round(this.emi*10000)/10000
        this.payment = this.tenure * this.emi
        this.payment = Math.round(this.payment * 10000)/10000
        this.totIntPayable = (this.payment - this.contactForm.value.loanAmt)
        this.rate=10
        console.log(this.rate +" "+  this.tenure +" "+this.emi+"  "+this.payment +"  "+ this.totIntPayable)
      }
     
    }
}


//   onSubmit() {

//     //     this.submitted = true;						
//     //     if(this.contactForm.invalid){						
//     //       return;						
//     //     }
//     if(confirm("Are you sure you want register?")){					
//         this.regservice.addUser(this.contactForm.value)						
//           .subscribe( data => {	
//           alert("Application has been submitted successfully !!" );				
//             this.router.navigate(['homeloan']);						
//           });						
//       }		
//   }
// }

