import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Iaccount } from './account';

@Injectable()
export class AccountService {

   // private cust_num = "2";
    public customer = []
    private _url: string = "http://localhost:8080/account/accounts/";
    private Update_url: string = "http://localhost:8080/account/accounts/focus/";
    
    

    constructor(private http: HttpClient) {}

    myMethod(cust_num:string){
        this.customer = []
        this.customer.push(cust_num)
       
    }

   

    getAccounts(): Observable<Iaccount[]> {
        console.log(this.customer)
        return this.http.get<Iaccount[]>(this._url + this.customer[0]);
    }

    updateAccount(id: any, account: Iaccount){
        this.http.put(this.Update_url + id, account).subscribe(data =>{
            console.log(data);

        })
      };
   
}