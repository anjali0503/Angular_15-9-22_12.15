import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Interviewer } from 'src/app/domain/interviwer';
import { InterviewerService } from 'src/app/services/interviewer.service';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent implements OnInit {
 interviewerId:number=0;
 Interviewer:Interviewer=new Interviewer();
 submitted:boolean=false;
 result:boolean=false;
  constructor(private interviewerService:InterviewerService,
    private activateRoute :ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    console.log("in update result component");
    this.interviewerId=this.activateRoute.snapshot.params['interviewId']
    this.interviewerService.getSinglelApplicant(this.interviewerId).subscribe(
      data=>{
        this.Interviewer=data;
        console.log(this.Interviewer);
        
    });
    
  }

  updateResult(){
      this.interviewerService.updateResult(this.Interviewer).subscribe(
        data=>{
          this.result=data;
          console.log(this.result);
          this.submitted=true;
          
        }
      );
  }

  backtohome(){
    this.router.navigate(["HomeInterviewerpage"]);
  }

}
