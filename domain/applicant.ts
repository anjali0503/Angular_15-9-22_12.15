import { DocumentDetails } from "./document";
import { JobDescriptionDetails } from "./jobdescription";

export class ApplicantDetails{
    applicantId:number=0;
    applicantName:string="";
    qualification:string="";
    skill1:string="";
    skill2:string="";
    skill3:string="";
    contact:string="";
    documentDetails:DocumentDetails=new DocumentDetails();
    jobDescriptionDetails:JobDescriptionDetails=new JobDescriptionDetails();
    status:string="";
}




















