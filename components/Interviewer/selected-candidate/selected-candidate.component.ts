import { Component, OnInit } from '@angular/core';
import { ApplicantDetails } from 'src/app/domain/applicant';
import { ApplicantService } from 'src/app/services/applicant.service';

@Component({
  selector: 'app-selected-candidate',
  templateUrl: './selected-candidate.component.html',
  styleUrls: ['./selected-candidate.component.css']
})
export class SelectedCandidateComponent implements OnInit {

  selectedApplicants:ApplicantDetails[]=[];
  applicantDetails:ApplicantDetails=new ApplicantDetails();
  constructor(private applicantDetailsService:ApplicantService) { }

  ngOnInit(): void {



    
    this.applicantDetailsService.getAllSelectedApplicants().subscribe(
      data => {
        console.log("After applicantDetailsService");
        this.selectedApplicants = data;    
        console.log(this.selectedApplicants);
        // console.log(this.applicantDetails.requiredCandidate +"req");
        
      }
    );

  }

 
}
