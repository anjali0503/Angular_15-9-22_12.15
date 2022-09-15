import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectDetails } from '../domain/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {
private baseURL: string="http://localhost:8080/viewBudget/checkView/";
  constructor(private httpClient:HttpClient) { }


  getProject(projectId:number):Observable<ProjectDetails[]>{
    console.log("in get project");
    return this.httpClient.get<ProjectDetails[]>(this.baseURL+projectId);
  
  }
}
