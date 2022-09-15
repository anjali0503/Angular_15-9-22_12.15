import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicantDetails } from 'src/app/domain/applicant';
import { JobDescriptionDetails } from 'src/app/domain/jobdescription';
import { ApplicantService } from 'src/app/services/applicant.service';
import { JobDescriptionService } from 'src/app/services/job-description.service';

@Component({
  selector: 'app-get-applicants',
  templateUrl: './get-applicants.component.html',
  styleUrls: ['./get-applicants.component.css']
})
export class GetApplicantsComponent implements OnInit {
  jobId:number=0;
  applicantDetailsArray:ApplicantDetails[]=[];
  jobDescription:JobDescriptionDetails=new JobDescriptionDetails;
  constructor(private applicantService: ApplicantService,
    private router:Router,
    private jobDescriptionService:JobDescriptionService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.jobId=this.activatedRoute.snapshot.params['jobId'];
   this.reloadData();
  }

  loadJobByJobId(jobId: number) {
    console.log("loadJobByJobId");
    
    this.jobDescriptionService.getSingleJD(jobId).subscribe(
      data => {
        console.log("in jobDescSerr");
        
        this.jobDescription = data;
        console.log(jobId);
        
      }
    );
  }

  reloadData(){
    this.applicantService.getApplicant(this.jobId).subscribe(
      data=>{
        console.log("in reloaddata()");
        this.applicantDetailsArray=data;
        console.log("getting applicantDetailsArray");
        console.log(data);
        console.log(this.applicantDetailsArray);
        
        this.loadJobByJobId(this.jobId);
        
        
        
        
      }
    );
   }

   getInterviewerId(applicantId:number){
    console.log("in getInterviewerId()");
    console.log(applicantId);
    this.router.navigate(["assignInterviewer",applicantId]);
    
    
   }
 
}
