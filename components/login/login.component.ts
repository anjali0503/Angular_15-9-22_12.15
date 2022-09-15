import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/domain/login';
import { LoginDetailsService } from 'src/app/services/login-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : Login = new Login();
  result:boolean = false;
  userId :string = '';
  password : string = '';
  constructor(private activatedRoute : ActivatedRoute,
    private loginDetailsService : LoginDetailsService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  getLoginDetails(){
    console.log("in login page");
    console.log(this.login);
    this.loginDetailsService.getLoginDetails(this.login).subscribe(
      data =>{
        this.login=data;
        console.log(this.login);
        sessionStorage.setItem('login',JSON.stringify(this.login));
        

          if(this.login.designation === 'TL'){
            this.router.navigate(['MenuTLpage']);
          }

          if(this.login.designation === 'PM'){
            this.router.navigate(['MenuPMpage']);
          }

          if(this.login.designation === 'HR'){
            this.router.navigate(['MenuHRpage']);
          }

          if(this.login.designation === 'Interviewer'){
            this.router.navigate(['MenuInterviewerpage']);
          }
          


      }
    );
    }
       
}
