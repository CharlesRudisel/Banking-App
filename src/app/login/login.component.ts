import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../registration-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  customer = new Customer();
  msg =' ';

  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.customer).subscribe(
      data => { console.log("Response recieved ");
      this._router.navigate(['main-page'])
       
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


