import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/Admin/Employee-Services/employee.service';
import { Router } from '@angular/router';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
employeeData:any
  constructor(public EmployeeService:EmployeeService,private router:Router ) { }

  async getEmployeeData(){
   
    this.employeeData=await lastValueFrom(this.EmployeeService.getEmployeeApi())
    // console.log(this.employeeData[0].Name)
  }

  ngOnInit(): void {
    this.getEmployeeData();
  }

}
