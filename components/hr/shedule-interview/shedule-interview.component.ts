import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicantDetails } from 'src/app/domain/applicant';
import { EmployeeDetails } from 'src/app/domain/employee';
import { Interviewer } from 'src/app/domain/interviwer';
import { JobDescriptionDetails } from 'src/app/domain/jobdescription';
import { ApplicantService } from 'src/app/services/applicant.service';
import { CheckEmployeeService } from 'src/app/services/check-employee.service';
import { InterviewerService } from 'src/app/services/interviewer.service';
import { JobDescriptionService } from 'src/app/services/job-description.service';

@Component({
  selector: 'app-shedule-interview',
  templateUrl: './shedule-interview.component.html',
  styleUrls: ['./shedule-interview.component.css']
})
export class SheduleInterviewComponent implements OnInit {
  employeeDetails: EmployeeDetails = new EmployeeDetails();
  jobId: number = 0;
  applicantId: number = 0;
  employeeDetailsArray: EmployeeDetails[] = [];
  jobDescription: JobDescriptionDetails = new JobDescriptionDetails();
  applicant: ApplicantDetails = new ApplicantDetails();
  submitted: boolean = false;
  Interviewer: Interviewer = new Interviewer();
  constructor(private router: Router,
    private checkEmployeeService: CheckEmployeeService,
    private jobDescriptionService: JobDescriptionService,
    private activatedRoute: ActivatedRoute,
    private applicantService: ApplicantService,
    private interviewerService:InterviewerService) { }

  ngOnInit(): void {
    this.applicantId = this.activatedRoute.snapshot.params['applicantId'];
    console.log(this.applicantId);
    this.applicantService.getApplicantByApplicantId(this.applicantId).subscribe(
      data => {
        this.applicant = data;

        console.log(this.applicant);


        this.loadJobByJobId(this.applicant.jobDescriptionDetails.jobId);
        this.reloadData();

      }
    );

  }


  setInterviewer() {
    console.log(this.employeeDetails);
    
    this.Interviewer.applicantDetails.applicantId = this.applicant.applicantId;
    this.Interviewer.employeeDetails.employeeId = this.employeeDetails.employeeId;
    this.Interviewer.status='Shortlisted';
    console.log(this.Interviewer);
    this.applicant.status='In Process';
    console.log("************");
    this.submitted=true;
    


    this.interviewerService.addIntoInterviewer(this.Interviewer).subscribe(
      data=>
      {
        this.Interviewer=data;
        console.log(this.Interviewer);
        
      }
    );
    
  }
  loadJobByJobId(jobId: number) {
    console.log("loadJobByJobId");

    this.jobDescriptionService.getSingleJD(jobId).subscribe(
      data => {
        this.jobDescription = data;
        console.log(this.jobDescription);
      }
    );
  }

  reloadData() {

    this.checkEmployeeService.getInterviewerId(this.applicant.jobDescriptionDetails.jobId).subscribe(
      data => {
        console.log("in reload data");
        this.employeeDetailsArray = data;
        console.log("getting data employeeDetailsArray");
        console.log(this.employeeDetailsArray);


        console.log(data);
        console.log("after getting data");

        console.log(this.employeeDetailsArray);

        console.log("after checking employee");
        // this.loadJobByJobId(this.jobId);

      }
    );
  }


  backtohome() {
    console.log("backtoHome");
    this.router.navigate(['HomeHRpage']);

  }

}
