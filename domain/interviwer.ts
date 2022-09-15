import { ApplicantDetails } from "./applicant";
import { EmployeeDetails } from "./employee";

export class Interviewer{
    interviewId:number=0;
    applicantDetails:ApplicantDetails=new ApplicantDetails();
    employeeDetails:EmployeeDetails=new EmployeeDetails();
    status:string="";
    round1:string="";
    round2:string="";
    round3:string="";
}





