import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../registration-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  customer = new Customer();
  msg= " ";

  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUserFromRemote(this.customer).subscribe(
      data =>{
        console.log("Response recieved");
        this.msg="Registration Complete";
        this._router.navigate(['/login'])
      },
      error =>{
        console.log("Exception Occured");
        this.msg = error.error;
        
      }
    )
  }

}
