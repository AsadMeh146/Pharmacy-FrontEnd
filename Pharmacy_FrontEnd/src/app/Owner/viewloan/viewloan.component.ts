import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import {LoanService} from 'src/app/Services/Admin/Loan-Services/loan.service';
import { LookupService } from 'src/app/Services/Lookup/lookup.service';

@Component({
  selector: 'app-viewloan',
  templateUrl: './viewloan.component.html',
  styleUrls: ['./viewloan.component.css']
})
export class ViewloanComponent implements OnInit {
  loanData:any;
  loanRequests:any;
  searchText:any
  loan_update:any;
  result:any;
  loan_Id:any;
  public loanstatus=""

  constructor(public adminLoan : LoanService, public LookupService:LookupService,private router:Router,@Inject(DOCUMENT) document: Document) { }
  async getloanData(){
    this.loanData=await lastValueFrom(this.adminLoan.getLoanDataApi())
  }
  async updateloanData()
  {
    for(let i=0;i<this.loanRequests.length;i++)
    {
      if(this.loanstatus == this.loanRequests[i].Name)
      {
        this.loanstatus = this.loanRequests[i]._id;
      }
    }
    this.loan_update={

      loanstatus:this.loanstatus,

    }
    this.result=await lastValueFrom(this.adminLoan.updateLoanData(this.loan_Id,this.loan_update))
    this.getloanData();
  }

  async setloanData(loan_Id:any,loanstatus:any)
  {
    this.loan_Id=loan_Id;
    this.loanstatus = loanstatus;
  }
  
  async getloanstatus(){
    console.log("Hello");
    this.loanRequests=await lastValueFrom(this.LookupService.getloanStatusApi())
    console.log("World")
  };
  
  ngOnInit(): void {
    this.getloanData();
    this.getloanstatus();
  }

}
