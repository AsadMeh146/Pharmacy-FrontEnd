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
  getUser:any

  async formSubmission(){
    this.credentials = {
      email: this.email,
      password: this.password
    }
    this.loggedInUser = await lastValueFrom(this.signInService.findUserLogin(this.credentials))
    if(this.loggedInUser[0].Name == "Head")
    {
      alert("Login successfully")
      this.signInService.setLoginUser(this.loggedInUser);
      this.getUser = this.signInService.getLoginUser();      
      this.router.navigate(['/Owner'])
      // this.router.navigate(['/Admin'])
      // this.router.navigate(['/Customer'])
    }
    else if(this.loggedInUser[0].Designation == "63819532edac971f8fb5be61")
    {
      alert("Login successfully")
      this.signInService.setLoginUser(this.loggedInUser);
      this.getUser = this.signInService.getLoginUser();      
      // this.router.navigate(['/Owner'])
      // this.router.navigate(['/Admin'])
      this.router.navigate(['/Customer'])
    } 
    else if(this.loggedInUser[0].Designation == "638064007111d62fbbe508ae")
    {
      alert("Login successfully")
      this.signInService.setLoginUser(this.loggedInUser);
      this.getUser = this.signInService.getLoginUser();      
      // this.router.navigate(['/Owner'])
      this.router.navigate(['/Admin'])
      // this.router.navigate(['/Customer'])
    }
    else 
    {
      alert("Invalid username or password");
    }
  }

  ngOnInit(): void {
  }

}
