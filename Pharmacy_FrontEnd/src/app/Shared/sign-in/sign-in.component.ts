import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { SigninService } from 'src/app/Services/SignIn/signin.service';
import {login_user} from 'src/app/class/user';

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
    let gettingemail : login_user
    gettingemail = login_user.GetInstance()

    this.credentials = {
      email: this.email,
      password: this.password
    }

    this.loggedInUser = await lastValueFrom(this.signInService.findUserLogin(this.credentials))
    // alert(this.loggedInUser[0].userName)
    console.log("response from bk" , this.loggedInUser)
    if(this.loggedInUser.length>0)
    {
      alert("User is registered successfully")
      gettingemail.login_email = this.loggedInUser[0].Email;
      gettingemail.login_pharmacyId = this.loggedInUser[0].PharmacyId;
      console.log("this is email from bk" , this.loggedInUser[0].Email)
      console.log("this is email saved in class" , gettingemail.login_email)
      this.router.navigate(['/add-loan'])
    }
    else
    {
      alert("Oops not login");
    }
  }

  ngOnInit(): void {
  }

}
