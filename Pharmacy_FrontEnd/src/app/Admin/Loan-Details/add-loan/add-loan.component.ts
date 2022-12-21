import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom, VirtualTimeScheduler } from 'rxjs';
import {LoanService} from 'src/app/Services/Admin/Loan-Services/loan.service';
import {AdminService} from 'src/app/Services/Owner/Admin/admin.service';

import { SigninService } from 'src/app/Services/SignIn/signin.service';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {
  


  constructor(public AddLoanService:LoanService,public AddAdminService:AdminService,private signInService:SigninService,private router:Router) {

  }
  
  AdminData:any
  loan:any
  result:any
  // curr_arr:any
  loans:any
    public getUserEmail:any
    public email=""
    public Purpose=""
    public AmountRequested=""
    public ApplyDate=""
    public loanstatus=""

  async handleSubmit(){

    // let gettingemail = login_user
    // gettingemail = login_user.GetInstance()
    // emailforhtml: gettingemail.login_email

    for(let i=0;i<this.loans.length;i++)
    {
      if(this.loans[i].Name == "Waiting")
      {
        this.loanstatus = this.loans[i]._id;
      }
    }
    this.loan={
      email:this.getUserEmail,
      Purpose:this.Purpose,
      AmountRequested:this.AmountRequested,
      ApplyDate:this.ApplyDate,
      loanstatus:this.loanstatus,
    }
    this.result= await lastValueFrom(this.AddLoanService.AddLoanApi(this.loan))
    if(this.result){
      alert("Request Added successfully")
      this.getUserEmail = "",
      this.Purpose = "",
      this.AmountRequested = "",
      this.ApplyDate = "",
      this.loanstatus = "",
       this.router.navigate([''])
    }
    else{
      alert("Ooops Error")
    }
  }

  // async getAdmin(){
  //   this.AdminData=await lastValueFrom(this.AddAdminService.getAdminApi())
  // }

  async getloanStatus()
  {
    this.loans = await lastValueFrom(this.AddLoanService.get_loanstatusApi());
    // alert(this.loans[2].Name)
    // alert(this.loans[2]._id)
  }
  // async getUserName()
  // {
  //   this.curr_arr = await lastValueFrom(this.AddcurrService.get_CurrApi());

  // }

  ngOnInit(): void {

    this.getUserEmail = this.signInService.getLoginUser();
    this.getUserEmail = this.getUserEmail[0].Email;
    this.getloanStatus();

  }

}
