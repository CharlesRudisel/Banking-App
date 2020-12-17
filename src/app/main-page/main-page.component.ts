import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account_service';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  title = 'BankingApplication';

  public accounts = []
  public customer: Customer
  public counter: number
  
 

  constructor(private _accountService: AccountService, private _customerService:CustomerService) {}

  ngOnInit() {
    this._accountService.getAccounts().subscribe(data => this.accounts = data);
    //this._customerService.getCustomer().subscribe(data => this.customer = data);
   
    
  }

  
}