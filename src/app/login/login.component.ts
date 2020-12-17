import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account_service';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { RegistrationService } from '../registration-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  customer = new Customer();
  customer2: Customer
  msg =' ';
  accounts = []

  constructor(private _service: RegistrationService, private _router: Router, private _customerService: CustomerService, private _accountService: AccountService) { }

  ngOnInit(): void {
    
  }

  loginUser(){
    this._service.loginUserFromRemote(this.customer).subscribe(
      data => { console.log("Response recieved ");

      this._customerService.getCustomer(this.customer.email).subscribe(data => this.customer2 = data);
      this._accountService.myMethod(this.customer2.customerNumber.toString());
      
      this._router.navigate(['main-page']);

       
    },
      error => {
        console.log("Exception Occured") 
        this.msg = 'bad credentials, please enter valid email and password '}
    )

  }

  gotoregistration(){
    this._router.navigate(['registration'])
  }

  gotoSuccess(){
    this._router.navigate(['login-success'])
  }

}


