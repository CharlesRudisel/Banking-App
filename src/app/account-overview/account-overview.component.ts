import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account_service';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  test: Iaccount;
  

  constructor(private _accountService: AccountService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.acctNum = id;
    this._accountService.getAccounts().subscribe(data => this.accounts = data);
    //console.log(this.accounts)

  
  }

  onSelect(){

    function myFunction() {
      alert("You already have the maximum number of accounts (3)");
    }

    if(this.accounts.length < 3){

      this.router.navigate(['/setup_one'])
    }
    else 
    {
      myFunction()
    }
  }

}
