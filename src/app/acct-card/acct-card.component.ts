import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../account_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acct-card',
  templateUrl: './acct-card.component.html',
  styleUrls: ['./acct-card.component.scss']
})
export class AcctCardComponent implements OnInit {

  public accounts = []
  @Input() index: number;
  @Input() test_array: any[];
  fakeArray = new Array(4);
  
  setStyles(){
    let styles = {
      'border-top-color':(this.accounts[this.index].acct_type === 'savings') ? 'blue' :(this.accounts[this.index].acct_type === 'credit card') ? 'green': 'red',
      
    }
    return styles;
  }


  constructor(private _accountService: AccountService, private router: Router) { }

  ngOnInit() {
    this._accountService.getAccounts().subscribe(data => this.accounts = data);
   
  }

  onSelect(_account){
    this.router.navigate(['/account-overview', this.test_array[this.index].accountNumber])
  }

}
