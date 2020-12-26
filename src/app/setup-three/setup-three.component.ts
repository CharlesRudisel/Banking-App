import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Iaccount } from '../account';
import { AccountService } from '../account_service';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-setup-three',
  templateUrl: './setup-three.component.html',
  styleUrls: ['./setup-three.component.scss']
})
export class SetupThreeComponent implements OnInit {

  array = [];
  status: boolean = true;
  counter = 0;
  array_of_selected_accounts: Array<string>;
  iterator: number;
  description_list = [];
  catergory_list = [];
  email;
  arrayOfAmounts = [];
  buttonDisabled: boolean = true;

  total_amounts = [];
  account_obj_holder: Iaccount
  customer2: Customer;

  cust_accounts = []

  arrayOfValues =[]



  clickEvent(index: number) {
    //this.status = !this.status;   
    this.array[index] = !this.array[index];
    if (this.array[index] == false) {
      this.counter += 1;
    }
    if (this.array[index] == true) {
      this.counter -= 1;
    }

    if (this.counter == this.iterator) {
      this.buttonDisabled = false;
    }
    if (this.counter != this.iterator) {
      this.buttonDisabled = true;
    }
    //console.log(this.counter) ;
  }

  constructor(private router: Router, private route: ActivatedRoute, private _accountService: AccountService, private _customerService: CustomerService) { }

  ngOnInit(): void {

    const myArray = this.route.snapshot.queryParamMap.get('myArray');
    if (myArray === null) {
      this.array_of_selected_accounts = new Array<string>();
    } else {
      this.array_of_selected_accounts = JSON.parse(myArray);
    }

    for (let i = 0; i < 39; i++) {
      this.array.push(this.status)
    }
    //console.log(this.arrayOfValues);
    this.iterator = parseInt(this.array_of_selected_accounts.pop())
    console.log(this.iterator)
    console.log(this.array_of_selected_accounts)
    this.array_of_selected_accounts.reverse()

    for (let x = 0; x < this.iterator; x++) {
      var res = this.array_of_selected_accounts[x].split(":");
      this.description_list.push(res[0].trim())
      this.catergory_list.push(res[1].trim())


    }

    this.array_of_selected_accounts.reverse();

    for (let x = 0; x < this.iterator; x++) {
      this.array_of_selected_accounts.pop()
    }

    this.array_of_selected_accounts.reverse();
    this.email = this.array_of_selected_accounts.pop()
    console.log(this.email)


    console.log(this.description_list)
    console.log(this.catergory_list)
    console.log(this.array_of_selected_accounts)
    //console.log(this.email)
  }

  onSelect() {


    if (this.array[0] == false) {
      this.arrayOfAmounts.push(-1);

    }
    if (this.array[1] == false) {
      this.arrayOfAmounts.push(-12);
    }
    if (this.array[2] == false) {
      this.arrayOfAmounts.push(-29);
    }
    if (this.array[3] == false) {
      this.arrayOfAmounts.push(-50);
    }
    if (this.array[4] == false) {
      this.arrayOfAmounts.push(-104);
    }
    if (this.array[5] == false) {
      this.arrayOfAmounts.push(150);
    }
    if (this.array[6] == false) {
      this.arrayOfAmounts.push(195);
    }
    if (this.array[7] == false) {
      this.arrayOfAmounts.push(-200);
    }
    if (this.array[8] == false) {
      this.arrayOfAmounts.push(-225);
    }
    if (this.array[9] == false) {
      this.arrayOfAmounts.push(-250);
    }
    if (this.array[10] == false) {
      this.arrayOfAmounts.push(288);
    }
    if (this.array[11] == false) {
      this.arrayOfAmounts.push(317);
    }
    if (this.array[12] == false) {
      this.arrayOfAmounts.push(-334);
    }
    if (this.array[13] == false) {
      this.arrayOfAmounts.push(-482);
    }
    if (this.array[14] == false) {
      this.arrayOfAmounts.push(-577);
    }

    if (this.array[15] == false) {
      this.arrayOfAmounts.push(611);
    }
    if (this.array[16] == false) {
      this.arrayOfAmounts.push(641);
    }
    if (this.array[17] == false) {
      this.arrayOfAmounts.push(-690);
    }
    if (this.array[18] == false) {
      this.arrayOfAmounts.push(-721);
    }
    if (this.array[19] == false) {
      this.arrayOfAmounts.push(1009);
    }
    if (this.array[20] == false) {
      this.arrayOfAmounts.push(1291);
    }
    if (this.array[21] == false) {
      this.arrayOfAmounts.push(1456);
    }
    if (this.array[22] == false) {
      this.arrayOfAmounts.push(-1987);
    }
    if (this.array[23] == false) {
      this.arrayOfAmounts.push(2899);
    }
    if (this.array[24] == false) {
      this.arrayOfAmounts.push(3780);
    }
    if (this.array[25] == false) {
      this.arrayOfAmounts.push(-3567);
    }
    if (this.array[26] == false) {
      this.arrayOfAmounts.push(6158);
    }
    if (this.array[27] == false) {
      this.arrayOfAmounts.push(-17);
    }
    if (this.array[28] == false) {
      this.arrayOfAmounts.push(-33);
    }
    if (this.array[29] == false) {
      this.arrayOfAmounts.push(-90);
    }
    if (this.array[30] == false) {
      this.arrayOfAmounts.push(67);
    }
    if (this.array[31] == false) {
      this.arrayOfAmounts.push(-44);
    }
    if (this.array[32] == false) {
      this.arrayOfAmounts.push(-119);
    }
    if (this.array[33] == false) {
      this.arrayOfAmounts.push(183);
    }
    if (this.array[34] == false) {
      this.arrayOfAmounts.push(-202);
    }
    if (this.array[35] == false) {
      this.arrayOfAmounts.push(-7);
    }
    if (this.array[36] == false) {
      this.arrayOfAmounts.push(919);
    }
    if (this.array[37] == false) {
      this.arrayOfAmounts.push(-81);
    }
    if (this.array[38] == false) {
      this.arrayOfAmounts.push(-222);
    }


    console.log(this.arrayOfAmounts)


    //===============================================================================
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
    //===============================================================================
    var result = chunkArray(this.arrayOfAmounts, this.iterator / this.array_of_selected_accounts.length); //transactions divided by num of accts
    var result1 = chunkArray(this.description_list, this.iterator / this.array_of_selected_accounts.length);
    var result2 = chunkArray(this.catergory_list, this.iterator / this.array_of_selected_accounts.length);


    console.log(result)    // THIS IS THE FUCKING ISSUE
    console.log(result1)
    console.log(result2)

    for (var i = 0; i < result.length; i++) {
      var cube = result[i];
      for (var j = 0; j < cube.length; j++) {
        //console.log(result[i][j] + " : " + result1[i][j] + " : " + result2[i][j]);
        this.arrayOfValues.push(result[i][j] + " : " + result1[i][j] + " : " + result2[i][j])
      }
    }

    this.arrayOfValues.push(this.iterator)
    this.arrayOfValues.push(this.email)

    console.log(this.arrayOfValues)
    





    for (let y = 0; y < this.array_of_selected_accounts.length; y++) {
      const arrSum = result[y] = result[y].reduce((a, b) => a + b, 0)
      this.total_amounts.push(arrSum);

      console.log(result.length[y])
      console.log(result1.length[y])
      console.log(result2.length[y])

      this.account_obj_holder = new Iaccount(arrSum, this.array_of_selected_accounts[y]);
      this._accountService.createAccount(this.email, this.account_obj_holder)

      //this._customerService.getCustomer(this.email).subscribe(data => this.customer2 = data);

    }


    //===============================================================================================================
    /*this._accountService.getAccounts2(this.email).subscribe(data => this.cust_accounts = data);
    
    for(let a=0; a < this.cust_accounts.length; a++){
      console.log(this.cust_accounts[a])
    }
  */
    console.log(this.total_amounts)
    console.log(result[0])

    this._customerService.getCustomer(this.email).subscribe(data => this.customer2 = data);
    //console.log(this.customer2.customerNumber)
    // sessionStorage.setItem("customer", this.customer2.customerNumber.toString());
    //this._accountService.myMethod(this.customer2.customerNumber.toString());

    // this.router.navigate(['/login'])

    const queryParams: any = {};
    queryParams.myArray = JSON.stringify(this.arrayOfValues);

    const navigationExtras: NavigationExtras = {
      queryParams
    };

    this.router.navigate(['/setup_four'], navigationExtras)
  }

}