import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Login } from '../domain/login';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginDetailsService {

  private baseUrl :string = "http://localhost:8080/loginapi/login";

  login : Login = new Login();
  constructor(private httpClient :HttpClient) { }

  getLoginDetails(login:Login) :Observable<Login>{
    console.log("in getLoginDetails ");
    console.log(login);
    return this.httpClient.post<Login>(this.baseUrl,login);
    
    
  }
  
 
  
}

