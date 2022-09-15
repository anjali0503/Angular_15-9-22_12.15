import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobDescriptionDetails } from 'src/app/domain/jobdescription';
import { JobDescriptionService } from 'src/app/services/job-description.service';

@Component({
  selector: 'app-published-jd',
  templateUrl: './published-jd.component.html',
  styleUrls: ['./published-jd.component.css']
})
export class PublishedJdComponent implements OnInit {

  jobDescription:JobDescriptionDetails=new JobDescriptionDetails;
  allJobDescriptionCareer: JobDescriptionDetails[] = [];
  result:boolean=false;
  constructor(private jobDescriptionService: JobDescriptionService,
    
    private router: Router) { }

  ngOnInit(): void {

    this.jobDescriptionService.getPublishedJob().subscribe(
      data => {
        console.log("After Publishing");
        this.allJobDescriptionCareer = data;    
        console.log(this.allJobDescriptionCareer);
        console.log(this.jobDescription.requiredCandidate +"req");
        
      }
    );

  }


}
