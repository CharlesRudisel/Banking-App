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

  public timeOfDate: string;
  public accounts = []
  public customer: Customer
  public counter: number


  morning = new Date();
  afternoon = new Date();
  evening = new Date();

  TOD_img;
  


  constructor(private _accountService: AccountService, private _customerService: CustomerService) { }

  ngOnInit() {
    this._accountService.getAccounts().subscribe(data => this.accounts = data);
    this._customerService.getCustomer2().subscribe(data => this.customer = data);

    var currentD = new Date();
    var morning = new Date();
    morning.setHours(0, 0, 0); // 5.30 pm
    
    var afternoon = new Date();
    afternoon.setHours(12, 0, 0); // 6.30 pm

    var evening = new Date();
    evening.setHours(18, 0, 0); // 6.30 pm

    console.log(currentD < morning)

    
    if (currentD >= morning && currentD < afternoon) {
      this.timeOfDate ="Morning";
      this.TOD_img ="sunrise (1).png";
      console.log("morning")
    }
    if (currentD >= afternoon && currentD < evening) {
      this.timeOfDate ="Afternoon";
      this.TOD_img ="sunny.png";
      console.log("afternoon")
    } 
    if (currentD >= evening ) {
      this.timeOfDate ="Evening";
      this.TOD_img ="night.png";
      console.log("evening")
    } 
  
  }



}