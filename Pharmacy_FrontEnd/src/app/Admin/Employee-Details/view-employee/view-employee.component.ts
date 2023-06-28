import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/Admin/Employee-Services/employee.service';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import { AdminService } from 'src/app/Services/Owner/Admin/admin.service';
import { AddPharmacyDetailsService } from 'src/app/Services/Owner/Pharmacy/add-pharmacy-details.service';
import { SigninService } from 'src/app/Services/SignIn/signin.service';


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employeeData: any
  getEmployee: any
  searchText: any
  pharmacies: any
  pharmacyId: any
  getUser: any
  designations: any
  statuses: any
  deleteEmployeeInfo: any
  updateEmployeeData: any
  Id: any
  result: any
  public Name = ""
  public CNIC = ""
  public Salary = ""
  public Designation = ""
  public DateOfBirth = ""
  public Address = ""
  public PharmacyId = ""
  public Status = ""
  public HireDate = ""
  public Email = ""
  public ContactNumber = ""
  constructor(public EmployeeService: EmployeeService, public signInService: SigninService, private router: Router, public AdminService: AdminService, public AddPharmacyDetailsService: AddPharmacyDetailsService, @Inject(DOCUMENT) document: Document) { }

  async getEmployeeData() {

    this.getEmployee = await lastValueFrom(this.EmployeeService.getEmployeeApi(this.pharmacyId))
    function isBigEnough(getEmployee: any) {
      return (getEmployee.Designation.Name != "Admin");
    }

    this.employeeData = this.getEmployee.filter(isBigEnough);
  }

  async deleteEmployeeData(Id: any) {
    console.log(Id);
    if (confirm("Are you sure you want to delete this data ?") == true) {
      this.deleteEmployeeInfo = await lastValueFrom(this.EmployeeService.deleteEmployeeApi(Id))
      alert("successfully deleted")
      this.getEmployeeData();
    }
  }

  setEmployeeData(Id: any, Name: any, CNIC: any, Salary: any, Designation: any, DateOfBirth: any, Address: any, PharmacyId: any, Status: any, HireDate: any, Email: any, ContactNumber: any) {
    console.log("set");
    this.Id = Id;
    this.Name = Name;
    this.CNIC = CNIC;
    this.Salary = Salary;
    this.Designation = Designation;
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
    (<HTMLInputElement>document.getElementById('InputDesignation')).value = Designation;
    (<HTMLInputElement>document.getElementById('InputDateOfBirth')).value = DateOfBirth;
    (<HTMLInputElement>document.getElementById('InputAddress')).value = Address;
    (<HTMLInputElement>document.getElementById('InputPharmacyId')).value = PharmacyId;
    (<HTMLInputElement>document.getElementById('InputStatus')).value = Status;
    (<HTMLInputElement>document.getElementById('InputHireDate')).value = HireDate;
    (<HTMLInputElement>document.getElementById('InputEmail')).value = Email;
    (<HTMLInputElement>document.getElementById('InputContactNumber')).value = ContactNumber;

  }
  async updateEmployeeDetails() {


    this.updateEmployeeData = {
      Name: this.Name,
      CNIC: this.CNIC,
      Salary: this.Salary,
      Designation: this.Designation,
      DateOfBirth: this.DateOfBirth,
      Address: this.Address,
      PharmacyId: this.PharmacyId,
      Status: this.Status,
      HireDate: this.HireDate,
      Email: this.Email,
      ContactNumber: this.ContactNumber,
    }

    this.result = await lastValueFrom(this.EmployeeService.updateEmployeeApi(this.Id, this.updateEmployeeData))
    alert("Updated Successfully");
    this.Name = ""
    this.CNIC = ""
    this.Salary = ""
    this.Designation = ""
    this.DateOfBirth = ""
    this.Address = ""
    this.PharmacyId = ""
    this.Status = ""
    this.HireDate = ""
    this.Email = ""
    this.ContactNumber = ""
    this.getEmployeeData();

  }
  async getPharmacy() {
    this.pharmacies = await lastValueFrom(this.AddPharmacyDetailsService.getPharmacyApi())
  };


  async getDesignation() {
    this.designations = await lastValueFrom(this.AdminService.get_designationApi());

  }
  async getStatus() {
    this.statuses = await lastValueFrom(this.AdminService.get_statusApi());
  }

  ngOnInit(): void {
    this.getUser = this.signInService.getLoginUser();
    this.pharmacyId = this.getUser[0].PharmacyId;
    this.getEmployeeData();
    this.getPharmacy();
    this.getStatus();
    this.getDesignation();
  }

}
