import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantDetails } from 'src/app/domain/applicant';
import { EmployeeDetails } from 'src/app/domain/employee';
import { Interviewer } from 'src/app/domain/interviwer';
import { Login } from 'src/app/domain/login';
import { GetLoginDetailsService } from 'src/app/services/get-login-details.service';
import { InterviewerService } from 'src/app/services/interviewer.service';

@Component({
  selector: 'app-get-candidate',
  templateUrl: './get-candidate.component.html',
  styleUrls: ['./get-candidate.component.css']
})
export class GetCandidateComponent implements OnInit {
interviewer :Interviewer=new Interviewer();
login:Login=new Login();
employeeDetails: EmployeeDetails=new EmployeeDetails();
applicantDetails:ApplicantDetails=new ApplicantDetails();
candidateList:ApplicantDetails[]=[];
applicantList:Interviewer[]=[];
  constructor(private router:Router,
    private getLoginDetails: GetLoginDetailsService, 
    private interviewerService:InterviewerService) { }

    ngOnInit(): void {
      this.login = JSON.parse(sessionStorage.getItem('login') || '{}');
      this.getLoginDetails.getEmployeeDetails(this.login.loginId).subscribe(data => {
        this.employeeDetails = data;
        console.log(this.employeeDetails);
        
        this.interviewerService.getAllCandidates(this.employeeDetails.employeeId).subscribe(
          data => {
            console.log("in reload data");
  
            this.applicantList = data;
            console.log(this.applicantList);
  
  
          }
        );
      });
  
    }


    updateResult(interviewId:number){
      console.log("updateResult()");
      console.log(interviewId);
      this.router.navigate(['updateCandidate',interviewId]);
      
      
    }

}
