import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Itransaction } from './transaction';

@Injectable()
export class TransactionServiceService {

  private _url: string = "http://localhost:8080/transaction/transactions/";
  

    constructor(private http: HttpClient) {}

    getTransactions(account_number: string): Observable<Itransaction[]> {
        return this.http.get<Itransaction[]>(this._url + account_number);
        
    }

    postTransaction(account_number: string, transaction: Itransaction){
      this.http.post(this._url + account_number, transaction).subscribe(data =>{
        console.log(data);
      })
    };
 
}