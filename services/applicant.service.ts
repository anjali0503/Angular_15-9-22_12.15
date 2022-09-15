import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicantDetails } from '../domain/applicant';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  applicantDetails:ApplicantDetails=new ApplicantDetails();
  applicantDetailsArray:ApplicantDetails[]=[];
  private baseURL: string = "http://localhost:8080/applicantdetailsapi";
  constructor(private httpClient: HttpClient) { }

  apply(applicantDetails:ApplicantDetails): Observable<ApplicantDetails> {
    console.log("in add new job");
    console.log(applicantDetails);
    return this.httpClient.post<ApplicantDetails>(this.baseURL + "/addapplicant", applicantDetails);
}
 


  getApplicant(jobId:number): Observable<ApplicantDetails[]> {
    console.log("in getApplicant()");
    console.log(jobId);
    return this.httpClient.get<ApplicantDetails[]>(this.baseURL + "/ViewApplicant/"+jobId);
   
    
  }


  getApplicantByApplicantId(applicantId:number):Observable<ApplicantDetails>{
    console.log(applicantId);
    
    console.log("getApplicantByApplicantId()");
    
    
    return this.httpClient.get<ApplicantDetails>(this.baseURL+"/getApplicant/"+applicantId);
  }



  getAllSelectedApplicants(): Observable<ApplicantDetails[]> {
    console.log("in getAllSelectedApplicants()");
    return this.httpClient.get<ApplicantDetails[]>(this.baseURL + "/getApplicantforhr");
  }

}
