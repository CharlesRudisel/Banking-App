import { Component, Input, OnInit } from '@angular/core';
import { TransactionServiceService } from '../transaction-service.service';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss']
})
export class TransactionCardComponent implements OnInit {

  public transactions = []
  public transactions_reversed = this.transactions.reverse();
  @Input() account_number: string;
  @Input() counter: string;

  constructor(private _accountService: TransactionServiceService ) { }
  

  ngOnInit(){
    this._accountService.getTransactions(this.account_number).subscribe(data => this.transactions = data.reverse());

   
  }

}
