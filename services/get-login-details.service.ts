import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../domain/employee';
import { Login } from '../domain/login';

@Injectable({
  providedIn: 'root'
})
export class GetLoginDetailsService {

  

  private baseUrl :string = "http://localhost:8080/employeedetailsapi/getbyid/"
  login : Login = new Login();
 
  constructor(private httpClient :HttpClient) { }

  getEmployeeDetails(loginId:number) :Observable<EmployeeDetails>{
    console.log("in getEmployeeDetailssERVICE ");
    return this.httpClient.get<EmployeeDetails>(this.baseUrl+loginId);
    
    
  }


  // getAllJobDescription(employeeId:number):Observable<JobDescriptionDetails[]>{
  //   console.log("in all job description");
  //   return this.httpClient.get<JobDescriptionDetails[]>(this.baseURL+"/getbyemployeeid/" + employeeId);
  // }


}
