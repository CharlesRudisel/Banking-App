import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account_service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  title = 'BankingApplication';

  public accounts = []
  public counter: number
  
 

  constructor(private _accountService: AccountService) {}

  ngOnInit() {
    this._accountService.getAccounts().subscribe(data => this.accounts = data);
    
  }

  
}