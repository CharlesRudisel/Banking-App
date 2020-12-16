import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http: HttpClient) { }

  public loginUserFromRemote(customer: Customer):Observable<any>{
     return this._http.post<any>("http://localhost:8080/login", customer)

  }

  public registerUserFromRemote(customer: Customer):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registerUser", customer)

 }
}
