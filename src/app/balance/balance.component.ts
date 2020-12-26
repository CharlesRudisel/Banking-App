import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../account_service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  @Input() acctNum: any;
  account = []
  test:any = "WTF";

  constructor(private _accountService: AccountService) { }

  ngOnInit() {

    this._accountService.getAccounts4(this.acctNum).subscribe(data => this.account = data)
    console.log(this.acctNum)
    //this.test = this.acctNum
  }

}
