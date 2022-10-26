import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { SigninService } from 'src/app/Services/SignIn/signin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private signInService:SigninService,private router:Router) { }
  email = ""
  password = ""
  loggedInUser: any
  credentials:any
  
  async formSubmission(){
    this.credentials = {
      email: this.email,
      password: this.password
    }
    this.loggedInUser = await lastValueFrom(this.signInService.findUserLogin(this.credentials))
    alert(this.loggedInUser[0].userName)
    if(this.loggedInUser.length>0)
    {
      alert("User is registered successfully")
      this.router.navigate(['/signup'])
    }
    else
    {
      alert("Oops not login");
    }
  }

  ngOnInit(): void {
  }

}
