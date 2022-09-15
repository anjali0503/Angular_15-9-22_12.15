import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetails } from 'src/app/domain/employee';
import { JobDescriptionDetails } from 'src/app/domain/jobdescription';
import { Login } from 'src/app/domain/login';
import { ProjectDetails } from 'src/app/domain/project';
import { CheckEmployeeService } from 'src/app/services/check-employee.service';
import { GetLoginDetailsService } from 'src/app/services/get-login-details.service';
import { JobDescriptionService } from 'src/app/services/job-description.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {
  jobId: number = 0;
  employee: EmployeeDetails = new EmployeeDetails();
  login: Login = new Login();
  employeeDetailsArray: EmployeeDetails[] = [];
  projectDetails: ProjectDetails = new ProjectDetails();
  jobDescription: JobDescriptionDetails = new JobDescriptionDetails();
  allJobDescriptionPM: JobDescriptionDetails[] = [];
  result: boolean = false;

  constructor(private jobDescriptionService: JobDescriptionService,
    private getLoginDetails: GetLoginDetailsService,
    private router: Router,
    private checkEmployeeService: CheckEmployeeService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.jobId = this.activatedRoute.snapshot.params['jobId'];
    this.login = JSON.parse(sessionStorage.getItem('login') || '{}');
    this.reloadData();
  }

  loadJobByJobId(jobId: number) {
    console.log("loadJobByJobId");
    
    this.jobDescriptionService.getSingleJD(jobId).subscribe(
      data => {
        this.jobDescription = data;
      }
    );
  }
  reloadData() {
    console.log("loading employeedetails");
    this.getLoginDetails.getEmployeeDetails(this.login.loginId).subscribe(data => {
      this.employee = data;
      console.log(this.employee);
      console.log("after printing employee");

      this.checkEmployeeService.checkemployee(this.jobId).subscribe(
        data => {
          console.log("in reload data");
          this.employeeDetailsArray = data;
          console.log("getting data employeeDetailsArray");

          console.log(data);
          console.log("after getting data");

          console.log(this.employeeDetailsArray);

          console.log("after checking employee");
          this.loadJobByJobId(this.jobId);

        }
      );
    });
  }

  assignProject(employee: EmployeeDetails) {
    console.log("in assignment");
    console.log(employee);
    console.log(this.jobDescription);
    
    
    employee.projectDetails = this.jobDescription.projectDetails;
    employee.mgr = this.jobDescription.employeeDetails.employeeId;
    employee.status = 'Working';
    console.log(employee);

    this.checkEmployeeService.assignProject(employee).subscribe(
      data => {
        this.result = data;
        
        
        this.reloadData();
        this.updateRequiredCount(this.jobDescription);

      });
  }

  updateRequiredCount(jobDescription:JobDescriptionDetails){
    console.log("in updateRequiredCount()");
    this.jobDescriptionService.updateRequiredCount(jobDescription).subscribe(
      data=>{
        console.log("in update");
        this.jobDescription=data;
        console.log( this.jobDescription);
        
        
      }
    );
    
  }

}


