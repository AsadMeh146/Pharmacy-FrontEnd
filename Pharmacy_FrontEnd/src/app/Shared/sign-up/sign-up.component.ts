import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { SignupService } from 'src/app/Services/SignUp/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public SignUpService:SignupService,private router:Router) { }
  user:any
  result:any
  public userName=""
  public email=""
  public  password=""
  public address=""
  public phone=""
  public role=""
  async handleSubmit(){
    this.user={
      userName:this.userName,
      email:this.email,
      password:this.password,
      address:this.address,
      phone:this.phone,
      role:"Customer"
    }
    this.result=await lastValueFrom(this.SignUpService.registerUserApi(this.user))
    if(this.result){
      alert("User is registered successfully")
      this.router.navigate([''])
    }
    else{
      alert("Ooops Error")
    }
  }
  ngOnInit(): void {
  }

}
