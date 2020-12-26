import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account_service';
import { ActivatedRoute } from '@angular/router';
import { Iaccount } from '../account';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.scss']
})
export class AccountOverviewComponent implements OnInit {


  public accounts = []
  public acctNum;
  fakeArray = new Array( Number(this.accounts.length) + 10);
  public account_type;
  public account = [];

  constructor(private _accountService: AccountService, private route: ActivatedRoute) { }

  ngOnInit() {

    
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.acctNum = id;
    this._accountService.getAccounts().subscribe(data => this.accounts = data);

    this._accountService.getAccounts4(this.acctNum).subscribe(data => this.account = data)

    
    
  }

}
