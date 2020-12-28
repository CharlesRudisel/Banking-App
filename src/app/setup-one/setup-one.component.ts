import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AccountService } from '../account_service';

@Component({
  selector: 'app-setup-one',
  templateUrl: './setup-one.component.html',
  styleUrls: ['./setup-one.component.scss']
})
export class SetupOneComponent implements OnInit {

  array = [];
  status: boolean = true;
  counter = 0;
  acct_array = [];
  public email;
  buttonDisabled: boolean = true;
  accounts = []
  numberOfAccounts:number;
  limit: number;
  

//=====================================================================================
  clickEvent(index:number){
      //this.status = !this.status;   
      this.array[index] = !this.array[index];  
      if(this.array[index] == false){
        this.counter += 1;
      }
      if(this.array[index] == true){
        this.counter -= 1;
      }
      if(this.counter == 0){
        this.buttonDisabled = true;
      }
      if(this.counter > 0){
        this.buttonDisabled = false;
      }
      if(this.counter > this.limit){
        this.buttonDisabled = true;
        alert("Please select a maximum of " + this.limit + " accounts");
      }
      //console.log(this.email);
      console.log(this.counter) ;  
      //console.log(this.array);
  }
//=====================================================================================


  constructor(private router: Router, private route: ActivatedRoute, private _accountService: AccountService) {}


  //=====================================================================================

  ngOnInit(): void {

    this.numberOfAccounts = parseInt(sessionStorage.getItem("NumberOfAccounts"))

    this._accountService.getAccounts2(this.email).subscribe(data => { this.accounts = data
    
    let id = this.route.snapshot.paramMap.get('id');
    this.email = id;
    console.log(this.email)
    
   // this.array.push(this.email)

    for (let i = 0; i < 3; i++) {
      this.array.push(this.status);
      
    }
    this.acct_array.push(this.email);
    

    if(this.numberOfAccounts == 0){
      this.limit = 3
    }
    if(this.numberOfAccounts== 1){
      this.limit = 2
    }
    if(this.numberOfAccounts == 2){
      this.limit = 1
    }

    //console.log(this.array);
    console.log("Number of accounts:" + this.accounts.length)
    console.log("Limit of new accts:" + this.limit)
  
  
  } );
  }

//=====================================================================================

  onSelect(){

    
    if(this.array[0]== false){
      this.acct_array.push("checking");
    }
    if(this.array[1]== false){
      this.acct_array.push("savings");
    }
    if(this.array[2]== false){
      this.acct_array.push("credit card");
    }

    const queryParams: any = {};
    queryParams.myArray = JSON.stringify(this.acct_array);

    const navigationExtras: NavigationExtras = {
      queryParams
    };

    this.router.navigate(['/setup_two'], navigationExtras)
  }

}