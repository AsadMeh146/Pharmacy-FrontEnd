import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import {EmployeeService} from 'src/app/Services/Admin/Employee-Services/employee.service';
import { AddPharmacyDetailsService } from 'src/app/Services/Owner/Pharmacy/add-pharmacy-details.service';
import { SigninService } from 'src/app/Services/SignIn/signin.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  image1 = null;
  constructor(public AddEmployeeService:EmployeeService,public signInService:SigninService,public AddPharmacyService:AddPharmacyDetailsService,private router:Router) { }
  employee:any
  employeeData:any
  getEmployee:any
  pharmacyId:any
  getUser:any
  result:any
  designations:any
  statuses:any
  pharmacies: any
  getUsers:any
    public Name=""
    public PIN=""
    public CNIC=""
    public Gender=""
    public Salary=""
    public Designation=""
    public DateOfBirth=""
    public Address=""
    public PharmacyId=""
    public Status=""
     public Image =""
    public HireDate=""
    public Email=""
    public isTrue = false;
    public ContactNumber=""
  async handleSubmit(){
    // for(let i=0;i<this.designations.length;i++)
    // {
    //   if(this.designations[i].Name != "Admin")
    //   {
    //     this.Designation = this.designations[i]._id;
    //   }
    // }
    // for(let i=0;i<this.statuses.length;i++)
    // {
    //   if(this.statuses[i].Name == "Active")
    //   {
    //     this.Status = this.statuses[i]._id;
    //   }
    // }
    if(this.getUsers.length > 0)
    {
      for(let i=0;i<this.getUsers.length;i++)
    {
      
      if(this.Email == this.getUsers[i].Email)
      {
        alert("Email already exists");
        this.isTrue = false;
        break;
      }
      else
      {
        this.isTrue = true;
      }
      if(this.CNIC == this.getUsers[i].CNIC)
      {
        alert("CNIC already exists");
        this.isTrue = false;
        break;
      }
      else
      {
        this.isTrue = true;
      }
      if(this.ContactNumber == this.getUsers[i].ContactNumber)
      {
        alert("Contact Number already exists");
        this.isTrue = false;
        break;
      }
      else
      {
        this.isTrue = true;
      }
      
    }
    if(this.isTrue == true && parseInt(this.Salary) >= 0 && this.DateOfBirth < this.HireDate)
    {
      var employee={
        Name:this.Name,
        PIN:this.PIN,
        CNIC:this.CNIC,
        Gender:this.Gender,
        Salary:this.Salary,
        Designation:this.Designation,
        DateOfBirth:this.DateOfBirth,
        Address:this.Address,
        PharmacyId:this.pharmacyId,
        Status:this.Status,
         Image:this.image1,
        HireDate:this.HireDate,
        Email:this.Email,
        ContactNumber:this.ContactNumber,
      }
      alert("Employee Added successfully")
      this.result = this.AddEmployeeService.AddEmployeeApi(employee);  
      this.Name=""
      this.PIN=""
      this.CNIC=""
      this.Gender=""
      this.Salary=""
      this.Designation=""
      this.DateOfBirth=""
      this.Address=""
      this.Status=""
      this.Image =""
      this.HireDate=""
      this.Email=""
      this.isTrue = false;
      this.ContactNumber=""
      this.getEmployeeData();
      this.get_Users();
      // // this.result= await lastValueFrom(this.AddEmployeeService.AddEmployeeApi(this.employee))
      // if(this.result){   
      // }
    }

    }
    else if(this.employeeData.length == 0)
    {
      var employee={
        Name:this.Name,
        PIN:this.PIN,
        CNIC:this.CNIC,
        Gender:this.Gender,
        Salary:this.Salary,
        Designation:this.Designation,
        DateOfBirth:this.DateOfBirth,
        Address:this.Address,
        PharmacyId:this.pharmacyId,
        Status:this.Status,
         Image:this.image1,
        HireDate:this.HireDate,
        Email:this.Email,
        ContactNumber:this.ContactNumber,
      }
      alert("Employee Added successfully")
      this.result = this.AddEmployeeService.AddEmployeeApi(employee);  
      this.Name=""
      this.PIN=""
      this.CNIC=""
      this.Gender=""
      this.Salary=""
      this.Designation=""
      this.DateOfBirth=""
      this.Address=""
      this.Status=""
      this.Image =""
      this.HireDate=""
      this.Email=""
      this.isTrue = false;
      this.ContactNumber=""
      this.getEmployeeData();
      this.get_Users();

    }
  }
  async getPharmacy(){
    this.pharmacies=await lastValueFrom(this.AddPharmacyService.getPharmacyApi())
  };
  async getDesignation()
  {
    this.designations = await lastValueFrom(this.AddEmployeeService.get_designationApi());
    function isBigEnough(designation:any) { 
      return (designation.Name != "Admin"); 
   } 
             
   this.designations =  this.designations .filter(isBigEnough); 
    // alert(this.designations[0].Name)
    // alert(this.designations[0]._id)  
  }
  async getStatus()
  {
    this.statuses = await lastValueFrom(this.AddEmployeeService.get_statusApi());
    // alert(this.statuses[1].Name)
    // alert(this.statuses[1]._id) 
  }
  onClickSelected(event:any){
    this.image1 = event.target.files[0];
  }
  async getEmployeeData(){
   
    this.getEmployee=await lastValueFrom(this.AddEmployeeService.getEmployeeApi(this.pharmacyId))
    function isBigEnough(getEmployee:any) { 
      return (getEmployee.Designation.Name != "Admin"); 
   } 
             
   this.employeeData= this.getEmployee.filter(isBigEnough); 
  }
  async get_Users()
  {
    this.getUsers = await lastValueFrom(this.AddEmployeeService.getUserApi());
  }
  ngOnInit(): void {
    this.getUser = this.signInService.getLoginUser();
    this.pharmacyId = this.getUser[0].PharmacyId;
    this.get_Users();
    this.getEmployeeData();
    this.getDesignation();
    this.getStatus();
    this.getPharmacy();
  
  }

}
