import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobDescriptionDetails } from '../domain/jobdescription';

@Injectable({
  providedIn: 'root'
})
export class JobDescriptionService {
  private baseURL: string = "http://localhost:8080/jobdescriptionapi";

  constructor(private httpClient: HttpClient) { }

  addJobDescription(jobdescription: JobDescriptionDetails): Observable<JobDescriptionDetails> {
    console.log("in add new job");
    console.log(jobdescription);


    return this.httpClient.post<JobDescriptionDetails>(this.baseURL + "/addJob", jobdescription);
  }
  getAllJobDescription(employeeId: number): Observable<JobDescriptionDetails[]> {
    console.log("in all job description");
    return this.httpClient.get<JobDescriptionDetails[]>(this.baseURL + "/getbyemployeeid/" + employeeId);
  }

  updateJobStatus(jobdescription: JobDescriptionDetails): Observable<boolean> {
    console.log("in updateJobStatus()");

    return this.httpClient.put<boolean>(this.baseURL + "/updateJobStatus", jobdescription);


  }

  getpendingrequests(projectId: string): Observable<JobDescriptionDetails[]> {
    console.log("in getpendingrequests()");
    return this.httpClient.get<JobDescriptionDetails[]>(this.baseURL + "/getpendingrequests/" + projectId);
  }

  getSingleJD(jobId: number): Observable<JobDescriptionDetails> {
    console.log("getsingle()");

    return this.httpClient.get<JobDescriptionDetails>(this.baseURL + "/getbyjobId/" + jobId);
    console.log(JobDescriptionDetails);
  }

  updateRequiredCount(jobDescription: JobDescriptionDetails): Observable<JobDescriptionDetails> {
    console.log("updateRequiredCount()");
    return this.httpClient.put<JobDescriptionDetails>(this.baseURL + "/updateRequiredCandidate", jobDescription);
  }


  // getApprovedJobDescription(employeeId: number): Observable<JobDescriptionDetails[]> {
  //   console.log("getApprovedJobDescription()");
  //   return this.httpClient.get<JobDescriptionDetails[]>(this.baseURL + "/getbyemployeeid/" + employeeId);
  // }

  getApprovedJobDescription(): Observable<JobDescriptionDetails[]> {
    console.log("in getApprovedJobDescription()");
    return this.httpClient.get<JobDescriptionDetails[]>(this.baseURL + "/getApprovedDescription");
  }


  


  getPublishedJob(): Observable<JobDescriptionDetails[]> {
    console.log("in getPublishedJob()");
    return this.httpClient.get<JobDescriptionDetails[]>(this.baseURL + "/getPublishDescription");
  }



}

