import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Iaccount } from './account';

@Injectable()
export class AccountService {

    private _url: string = "http://localhost:8080/account/accounts/2";
    private Update_url: string = "http://localhost:8080/account/accounts/focus/";
    

    constructor(private http: HttpClient) {}

    getAccounts(): Observable<Iaccount[]> {
        return this.http.get<Iaccount[]>(this._url);
    }

    updateAccount(id: any, account: Iaccount){
        this.http.put(this.Update_url + id, account).subscribe(data =>{
            console.log(data);

        })
      };
   
}