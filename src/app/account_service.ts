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
    private post_url: string = "http://localhost:8080/account/accounts/create/";
    private email_url: string = "http://localhost:8080/account/accounts/email/";
    
    

    constructor(private http: HttpClient) {}

    myMethod(cust_num:string){
        this.customer = []
        this.customer.push(cust_num)
        sessionStorage.setItem("customer", this.customer[0]);
       
    }

   

    getAccounts(): Observable<Iaccount[]> {
        console.log(this.customer)
        return this.http.get<Iaccount[]>(this._url + sessionStorage.getItem("customer"));
    }

    getAccounts2(email:string): Observable<Iaccount[]> {
        //console.log(this.customer)
        return this.http.get<Iaccount[]>(this.email_url + email);
    }

    async getAccounts3(email:string) {
        const result = await this.http.get<Iaccount[]>(this.email_url + email).toPromise();
     
        // do what you want with result 
     
        return await result;
     }

    createAccount(email: string, account: Iaccount){
        return this.http.post(this.post_url + email, account).subscribe(data =>{
            console.log(data);
        })
    }

    updateAccount(id: any, account: Iaccount){
        this.http.put(this.Update_url + id, account).subscribe(data =>{
            console.log(data);

        })
      };
   
}