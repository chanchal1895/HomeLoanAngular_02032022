import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/Services/contact.service';
import { RegistrationService } from 'src/app/Services/registration.service';
import { ConnectionService } from './ConnectionService';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private contactService:ContactService, private router: Router) { }
   submitted: boolean = false;
  contactForm:any;  
  
  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
      id:[],
      firstname:  ['',[Validators.required, Validators.minLength(5)]],
      lastname: ['',[Validators.required,Validators.minLength(5)]],
      primaryEmail:['',[Validators.required,Validators.email]],
      message:[''],
      subject:[''],


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

  get message() {
    return this.contactForm.get('message')
  }
  get subject() {
    return this.contactForm.get('subject')
  }


  onSubmit() {

    
    if(confirm("Do you want to submit?")){					
        this.contactService.addContactUsInfo(this.contactForm.value)						
          .subscribe( data => {	
          alert("Details has been submitted successfully !!" );				
            this.router.navigate(['homeloan']);						
          });						
      }		
  }
}
