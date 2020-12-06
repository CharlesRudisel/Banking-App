import { Component, OnInit } from '@angular/core';
import { AccountService } from './account_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'BankingApplication';

  public accounts = []
  public counter: number
  
 

  constructor(private _accountService: AccountService) {}

  ngOnInit() {
    this._accountService.getAccounts().subscribe(data => this.accounts = data);
    
  }

  
}
