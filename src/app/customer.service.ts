import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from './customer';

@Injectable()
export class CustomerService {

 

  private cust_num = null;
  private _url: string = "http://localhost:8080/customer/customers/email/" + this.cust_num;
  private Update_url: string = "http://localhost:8080/customer/customers/email/charlesrudisel@gmail.com";
  

  constructor(private http: HttpClient) {}

  getCustomer(email): Observable<Customer> {
      return this.http.get<Customer>("http://localhost:8080/customer/customers/email/" + email);
  }

 
 
}