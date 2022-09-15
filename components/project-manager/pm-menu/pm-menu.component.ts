import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDetails } from 'src/app/domain/project';
import { JobDescriptionService } from 'src/app/services/job-description.service';
import { ProjectDetailsService } from 'src/app/services/project-details.service';

@Component({
  selector: 'app-pm-menu',
  templateUrl: './pm-menu.component.html',
  styleUrls: ['./pm-menu.component.css']
})
export class PmMenuComponent implements OnInit {
projectDetails:ProjectDetails=new ProjectDetails();
  constructor(private jobDescriptionService:JobDescriptionService,
    private router: Router,
    private projectDetailsService: ProjectDetailsService) { }

  ngOnInit(): void {
  }

  getProject(projectId:number){
console.log("in getProject()");
console.log(projectId);
this.router.navigate(["ViewBudget",projectId])
;

  }

}
