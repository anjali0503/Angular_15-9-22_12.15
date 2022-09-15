import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplicantDetails } from 'src/app/domain/applicant';
import { EmployeeDetails } from 'src/app/domain/employee';
import { JobDescriptionDetails } from 'src/app/domain/jobdescription';
import { ProjectDetails } from 'src/app/domain/project';
import { ApplicantService } from 'src/app/services/applicant.service';
import { GetLoginDetailsService } from 'src/app/services/get-login-details.service';
import { JobDescriptionService } from 'src/app/services/job-description.service';

@Component({
  selector: 'app-get-approved-jobs',
  templateUrl: './get-approved-jobs.component.html',
  styleUrls: ['./get-approved-jobs.component.css']
})
export class GetApprovedJobsComponent implements OnInit {
  jobDescription:JobDescriptionDetails=new JobDescriptionDetails;
    employee:EmployeeDetails=new EmployeeDetails();
    projectDetails : ProjectDetails =new ProjectDetails();
  allJobDescriptionHR: JobDescriptionDetails[] = [];
  applicantDetailsArray:ApplicantDetails[]=[];
  result:boolean=false;
 


  constructor(private jobDescriptionService: JobDescriptionService,
    private getLoginDetails: GetLoginDetailsService,
    private router: Router ,
    private activatedRoute:ActivatedRoute,
    private applicantService : ApplicantService) { }

  ngOnInit(): void {
     
   


      this.jobDescriptionService.getApprovedJobDescription().subscribe(
        data => {
          console.log("DATA IS LOADING");
          this.allJobDescriptionHR = data;    
          console.log(this.allJobDescriptionHR);
        }
      );
    }


    publish(jobDescription: JobDescriptionDetails){
      console.log("in publish()");
      console.log(jobDescription);
      jobDescription.jobStatus='Publish';
      this.jobDescriptionService.updateJobStatus(jobDescription).subscribe(
        data=>{
          this.result=data;
          console.log(this.result);
          console.log("in publish()");
          
           
        }
      );
      
      
    }
    loadJobByJobId(jobId: number) {
      console.log("loadJobByJobId");
      
      this.jobDescriptionService.getSingleJD(jobId).subscribe(
        data => {
          this.jobDescription = data;
        }
      );
    }

   
    
    getApplicant(jobId:number){
    console.log("in checkemployee()");
    console.log(jobId);
    this.router.navigate(["getApplicant",jobId]);
  }
      

    }

  


