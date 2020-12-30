import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  @Input() test_array: any[];
  customers: Customer;

  constructor(private router: Router, private _customerService: CustomerService) { }

  ngOnInit(): void {
  }

  onSelect(){

    this._customerService.getCustomer2().subscribe(data => { this.customers = data

    function myFunction() {
      alert("You already have the maximum number of accounts (3)");
    }

    if(this.test_array.length < 3){

      this.router.navigate(['/setup_one', this.customers.email])
      sessionStorage.setItem("NumberOfAccounts", this.test_array.length.toString());
      sessionStorage.setItem("customer_name", this.customers.first_name);
    }
    else 
    {
      myFunction()
    }
  });

  }

}
