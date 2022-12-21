import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import {AdminService} from 'src/app/Services/Owner/Admin/admin.service';
import { AddPharmacyDetailsService } from 'src/app/Services/Owner/Pharmacy/add-pharmacy-details.service';
import { LookupService } from 'src/app/Services/Lookup/lookup.service';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {
  pharmacyRequests:any;
  AdminData: any;
  getAdmin:any;
  deleteAdminInfo:any;
  designations:any
  statuses:any
  pharmacies:any
  updateAdminData:any;
  result:any
  Id : any
  searchText:any
  public Name=""
  public CNIC=""
  public Salary=""
  public Designation=""
  public DateOfBirth=""
  public Address=""
  public PharmacyId=""
  public Status=""
  public HireDate=""
  public Email=""
  public ContactNumber=""
  public isTrue = false;
  constructor(public AdminService:AdminService,private router:Router ,public AddPharmacyDetailsService:AddPharmacyDetailsService,public LookupService:LookupService) { }

  async getAdminData(){
    this.getAdmin=await lastValueFrom(this.AdminService.getAdminApi())
    function isBigEnough(getAdmin:any) { 
      return (getAdmin.Designation.Name == "Admin"); 
   } 
   this.AdminData= this.getAdmin.filter(isBigEnough);  
  }
  
  async getpharmacyDetails(){
    console.log("Hello");
    this.pharmacyRequests=await lastValueFrom(this.AddPharmacyDetailsService.getPharmacyApi())
    console.log("World")
  };

  async deleteAdminData(Id:any)
   {
     console.log(Id);
     if(confirm("Are you sure you want to delete this data ?") == true)
     {
       this.deleteAdminInfo = await lastValueFrom(this.AdminService.deleteAdminApi(Id))
       alert("successfully deleted")
       this.getAdminData();
     }
   }
 
   
  async getPharmacy(){
    this.pharmacies=await lastValueFrom(this.AddPharmacyDetailsService.getPharmacyApi())
 };
 
 async getDesignation()
   {
     this.designations = await lastValueFrom(this.AdminService.get_designationApi());
     
   }
//  async getdesignation(){
//   console.log("Hello");
//   this.designations=await lastValueFrom(this.LookupService.getdesignationApi())
//   console.log("World")
// }
 async getStatus()
 {
   this.statuses = await lastValueFrom(this.AdminService.get_statusApi());
 }

 
 setAdminData(Id:any,Name:any,CNIC:any,Salary:any,DateOfBirth:any,Address:any,PharmacyId:any,Status:any,HireDate:any,Email:any,ContactNumber:any)
 {
   console.log("set");
  this.Id = Id;
  this.Name = Name;
  this.CNIC = CNIC;
  this.Salary = Salary;
 // this.Designation = Designation;
  this.DateOfBirth = DateOfBirth;
  this.Address = Address;
  this.PharmacyId = PharmacyId;
  this.Status = Status;
  this.HireDate = HireDate;
  this.Email = Email;
  this.ContactNumber = ContactNumber;
   (<HTMLInputElement>document.getElementById('InputName')).value = Name;
   (<HTMLInputElement>document.getElementById('InputCNIC')).value = CNIC;
   (<HTMLInputElement>document.getElementById('InputSalary')).value = Salary;
   //(<HTMLInputElement>document.getElementById('InputDesignation')).value = Designation;
   (<HTMLInputElement>document.getElementById('InputDateOfBirth')).value = DateOfBirth;
   (<HTMLInputElement>document.getElementById('InputAddress')).value = Address;
   (<HTMLInputElement>document.getElementById('InputPharmacyId')).value = PharmacyId;
   (<HTMLInputElement>document.getElementById('InputStatus')).value = Status;
   (<HTMLInputElement>document.getElementById('InputHireDate')).value = HireDate;
   (<HTMLInputElement>document.getElementById('InputEmail')).value = Email;
   (<HTMLInputElement>document.getElementById('InputContactNumber')).value = ContactNumber;
   
 }

 async updateAdminDetails()
    {
      this.updateAdminData={
        Name:this.Name,
        CNIC:this.CNIC,
        Salary:this.Salary,
       // Designation:this.Designation,
        DateOfBirth:this.DateOfBirth,
        Address:this.Address,
        PharmacyId:this.PharmacyId,
        Status:this.Status,
        HireDate:this.HireDate,
        Email:this.Email,
        ContactNumber:this.ContactNumber,
      }
      this.result=await lastValueFrom(this.AdminService.updateAdminApi(this.Id,this.updateAdminData))
      alert("Updated Successfully");
      this.Name=""
      this.CNIC=""
      this.Salary=""
      this.Designation=""
      this.DateOfBirth=""
      this.Address=""
      this.PharmacyId=""
      this.Status=""
      this.HireDate=""
      this.Email=""
      this.ContactNumber=""
      this.getAdminData();
    }
  
  ngOnInit(): void {
    this.getAdminData();
    //this.getpharmacyDetails();
    this.getPharmacy()
    this.getStatus()
    this.getDesignation()
  }

}
