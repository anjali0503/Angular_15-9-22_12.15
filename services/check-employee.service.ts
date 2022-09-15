import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDetails } from '../domain/employee';
import { JobDescriptionDetails } from '../domain/jobdescription';

@Injectable({
  providedIn: 'root'
})
export class CheckEmployeeService {
  employee: EmployeeDetails = new EmployeeDetails();
  private baseURL :string="http://localhost:8080/employeedetailsapi";
  constructor(private httpClient :HttpClient) { }

  checkemployee(jobId:number):Observable<EmployeeDetails[]>{
    console.log("in checkemployee()");
    console.log(jobId);
    
    return this.httpClient.get<EmployeeDetails[]>(this.baseURL+"/checkemployeelist/"+jobId);  
  }
  assignProject(employee:EmployeeDetails):Observable<boolean>{
    console.log(employee);
    
    return this.httpClient.put<boolean>(this.baseURL+"/updateProject",employee);
  }


  getInterviewerId(jobId:number):Observable<EmployeeDetails[]>{
    console.log("in getInterviewerId()");
    console.log(jobId);
    
    
    return this.httpClient.get<EmployeeDetails[]>(this.baseURL+"/checkinterviewer/"+jobId);

  }
}
