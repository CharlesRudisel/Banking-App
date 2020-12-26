import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account_service';
import { CustomerService } from '../customer.service';
import { Itransaction } from '../transaction';
import { TransactionServiceService } from '../transaction-service.service';

@Component({
  selector: 'app-setup-four',
  templateUrl: './setup-four.component.html',
  styleUrls: ['./setup-four.component.scss']
})
export class SetupFourComponent implements OnInit {


  array_of_selected_accounts: Array<string>;
  email: string;
  accounts = []
  transaction_arr = []
  holderTrans: Itransaction;
  iterator;

  constructor(private router: Router, private route: ActivatedRoute, private _accountService: AccountService, private _transactionService: TransactionServiceService) { }

  ngOnInit(): void {

    
      const myArray = this.route.snapshot.queryParamMap.get('myArray');
      if (myArray === null) {
        this.array_of_selected_accounts = new Array<string>();
      } else {
        this.array_of_selected_accounts = JSON.parse(myArray);
      }

      
      this.email = this.array_of_selected_accounts.pop()
      this.iterator = this.array_of_selected_accounts.pop()
      // console.log(this.email)
      //console.log(this.array_of_selected_accounts)

     

    
    
    console.log(this.email)
  }


 async onSelect() {

    //console.log(this.accounts)
    console.log(this.iterator)
    console.log(this.array_of_selected_accounts)

    await this._accountService.getAccounts2(this.email).subscribe(data =>{
       this.accounts = data
    console.log(this.accounts)

    function chunkArray(myArray, chunk_size) {
      var index = 0;
      var arrayLength = myArray.length;
      var tempArray = [];

      for (index = 0; index < arrayLength; index += chunk_size) {
        let myChunk = myArray.slice(index, index + chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
      }

      return tempArray;
    }


    var result = chunkArray(this.array_of_selected_accounts, this.iterator/this.accounts.length);

    console.log(result)


    //================================================================================================================
    for (let i = 0; i < this.accounts.length; i++) {

      

        for (let b = 0; b < result[i].length; b++) {

          console.log(this.accounts[i].accountNumber + " : " + result[i][b])
          this.transaction_arr.push(this.accounts[i].accountNumber + " : " + result[i][b])
        
        
      }
    }

    //================================================================================================================
    console.log(this.transaction_arr)


    for (let z = 0; z < this.transaction_arr.length; z++) {    // The issue is in this for loop

      this.holderTrans = null;
      var res = this.transaction_arr[z].split(":");
      console.log(res)


      this.holderTrans = new Itransaction(res[2], res[1], res[3]);
      this._transactionService.postTransaction(res[0].trim(), this.holderTrans)





    }

   this.router.navigate(['/login'])

  }
);}

}
