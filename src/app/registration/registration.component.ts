import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account_service';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
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
        //this._customerService.getCustomer(this.customer.email).subscribe(data => this.customer2 = data);
        //this._accountService.myMethod(this.customer2.customerNumber.toString());
        //console.log(this.customer2.customerNumber)
      
        //this._router.navigate(['/login'])
        this._router.navigate(['/setup_one', this.customer.email])
      },
      error =>{
        console.log("Exception Occured");
        this.msg = error.error;
        
      }
    )
  }

}
