import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iaccount } from '../account';
import { AccountService } from '../account_service';
import { Itransaction } from '../transaction';
import { TransactionServiceService } from '../transaction-service.service';


@Component({
  selector: 'app-transfer-card',
  templateUrl: './transfer-card.component.html',
  styleUrls: ['./transfer-card.component.scss']
})
export class TransferCardComponent implements OnInit {

  
  @Input() test_array: any[];
  constructor(private _accountService: AccountService, private _transactionService: TransactionServiceService) { }

  from_transaction: Itransaction;
  to_transaction: Itransaction;
  from_acct_index;
  to_acct_index;
  details;
  details2;
  from_operand: number;
  to_operand: number;
  x: number;
  y:number;
  w:number;
  z:number;
  a:number;
  b:number;
  c:number;



  ngOnInit(): void {
  }

  onSubmit(Balance_operand: any, from_acct_data: string , to_acct_data: string){

    
    this.details = from_acct_data.split(" ",2)
    this.from_acct_index = this.details[0];

    this.details2 = to_acct_data.split(" ",2)
    this.to_acct_index = this.details2[0];

    this.from_operand = this.test_array[this.from_acct_index].balance;
    this.to_operand = this.test_array[this.to_acct_index].accountNumber;
    
    //this.x = this.from_operand - Balance_operand;
    //this.y = this.to_operand + Balance_operand;
    //this.test_array[this.from_acct_index].balance = this.x
    //this.test_array[this.to_acct_index].balance =  this.y
    //this.test_array[this.from_acct_index].setBalance(parseInt(this.x.toString()));
    
    this.w = parseInt(this.test_array[this.from_acct_index].balance);
    this.z = this.w - parseInt(Balance_operand);
    this.test_array[this.from_acct_index].balance = this.z
    
    
    this.a = parseInt(this.test_array[this.to_acct_index].balance);
    this.b = this.a + parseInt(Balance_operand);
    this.test_array[this.to_acct_index].balance = this.b

    this.to_transaction
    this.from_transaction = new Itransaction("Transfer to: "+this.test_array[this.to_acct_index].accountNumber , -(Balance_operand));
    this.to_transaction = new Itransaction("Transfer from: "+this.test_array[this.from_acct_index].accountNumber , Balance_operand);
     

    this._accountService.updateAccount(this.test_array[this.from_acct_index].accountNumber, this.test_array[this.from_acct_index])
    this._accountService.updateAccount(this.test_array[this.to_acct_index].accountNumber, this.test_array[this.to_acct_index])
    this._transactionService.postTransaction(this.test_array[this.from_acct_index].accountNumber, this.from_transaction )
    this._transactionService.postTransaction(this.test_array[this.to_acct_index].accountNumber, this.to_transaction)
    location.reload();
  }

}
