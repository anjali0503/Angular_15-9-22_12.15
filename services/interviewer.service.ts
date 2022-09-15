import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interviewer } from '../domain/interviwer';

@Injectable({
  providedIn: 'root'
})
export class InterviewerService {
  private baseURL:string="http://localhost:8080/InterviewerDetailsapi";
  constructor(private httpClient:HttpClient) { }
  getCandidates(){
    
  }

  addIntoInterviewer(interviwer:Interviewer):Observable<Interviewer>{
    console.log("in addIntoInterviewer()");
    console.log(interviwer);
    return this.httpClient.post<Interviewer>(this.baseURL+"/addInterviewerDetails",interviwer);
    
    
  }

  getAllCandidates(employeeId: number): Observable<Interviewer[]> {
    console.log("in all job description");
    return this.httpClient.get<Interviewer[]>(this.baseURL + "/getInterviewerDetails/" + employeeId);
  }

  updateResult(Interviewer:Interviewer):Observable<boolean>{
    return this.httpClient.put<boolean>(this.baseURL+"/updateInterviewDetails",Interviewer);
  }
  
  getSinglelApplicant(interviewId:number):Observable<Interviewer>{
    return this.httpClient.get<Interviewer>(this.baseURL+"/getInterviewerObject/"+interviewId);
  }
}
