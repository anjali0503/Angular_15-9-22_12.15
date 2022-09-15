import { EmployeeDetails } from "./employee";
import { ProjectDetails } from "./project";

export class JobDescriptionDetails {

    jobId: number = 0;
   
    skill1: string = "";
    skill2: string = "";
    skill3: string = "";
   
    jobStatus: string = "Pending";
    requiredCandidate: number = 0;
    employeeDetails:EmployeeDetails= new EmployeeDetails();
    projectDetails :ProjectDetails=new ProjectDetails();

}



