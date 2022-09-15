import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantDetails } from 'src/app/domain/applicant';
import { ApplicantService } from 'src/app/services/applicant.service';

@Component({
  selector: 'app-new-applicants',
  templateUrl: './new-applicants.component.html',
  styleUrls: ['./new-applicants.component.css']
})
export class NewApplicantsComponent implements OnInit {
  applicantDetails:ApplicantDetails=new ApplicantDetails();
  submitted:boolean=false;
  constructor(private applicantService: ApplicantService,private router :Router) { }
  
  ngOnInit(): void {
    
  }

  apply(){
    console.log("in add Applicant()");
    this.submitted=true;

    // this.applicantDetails.employeeDetails=this.employee;
    // this.applicantDetails.projectDetails=this.employee.projectDetails;
    // console.log(this.jobdescription);
    // this.jobdescription.jobStatus='Pending';
    // this.jobdescription.EmployeeId=this.emp
    this.applicantService.apply(this.applicantDetails).subscribe(
      data => {
        // this.applicantDetails.status='Applied';
        //   console.log(this.applicantDetails.status);
          
        this.applicantDetails = data;
        console.log(this.applicantDetails);
        this.submitted=true;


      })

  }
  backtohome() {
    console.log("backtohome()");
    this.router.navigate(['career']);


  }
}
