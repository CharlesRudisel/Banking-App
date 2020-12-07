import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account_service';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.scss']
})
export class AccountOverviewComponent implements OnInit {


  public accounts = []
  fakeArray = new Array(100);

  constructor(private _accountService: AccountService) { }

  ngOnInit() {
    this._accountService.getAccounts().subscribe(data => this.accounts = data);
    
  }

}
