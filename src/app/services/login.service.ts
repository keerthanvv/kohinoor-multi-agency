import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http :HttpClient){}
  public loginUser(User:User):Observable<any> {
     return this._http.post<any>("http://localhost:8080/login",User);
 
}
}
