import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { EmployeeService } from 'src/app/Services/Admin/Employee-Services/employee.service';
import { AdminService } from 'src/app/Services/Owner/Admin/admin.service';
import { AddPharmacyDetailsService } from 'src/app/Services/Owner/Pharmacy/add-pharmacy-details.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  image1 = null;
  file: any;
  constructor(
    public AddAdminService: AdminService,
    public AddPharmacyService: AddPharmacyDetailsService,
    private router: Router,
    public AddEmployeeService:EmployeeService

  ) {}
  AdminData: any;
  get_Admin:any;
  Admin_Data: any;
  admin: any;
  result: any;
  designations: any;
  getUsers:any
  statuses: any;
  pharmacies: any;
  public Name = '';
  public PIN = '';
  public CNIC = '';
  public Gender = '';
  public Salary = '';
  public Designation = '';
  public DateOfBirth = '';
  public Address = '';
  public PharmacyId = '';
  public Status = '';
  public Image = '';
  public HireDate = '';
  public Email = '';
  public ContactNumber = '';
  public isTrue = false;

  async handleSubmit() {
    for (let i = 0; i < this.designations.length; i++) {
      if (this.designations[i].Name == 'Admin') {
        this.Designation = this.designations[i]._id;
      }
    }
    for (let i = 0; i < this.statuses.length; i++) {
      if (this.statuses[i].Name == 'Active') {
        this.Status = this.statuses[i]._id;
      }
    }

    if(this.getUsers.length > 0)
    {
      for(let i=0;i<this.getUsers.length;i++)
    {
      
      if(this.Designation != this.getUsers[i].Designation._id && this.PharmacyId != this.getUsers[i].PharmacyId)
      {
        if(this.CNIC != this.getUsers[i].CNIC && this.PharmacyId != this.getUsers[i].PharmacyId)
        {
          if(this.Email != this.getUsers[i].Email && this.PharmacyId != this.getUsers[i].PharmacyId)
          {
            if(this.ContactNumber != this.getUsers[i].ContactNumber && this.PharmacyId != this.getUsers[i].PharmacyId)
            {
              this.isTrue = true;
              
            }
            else if(this.ContactNumber == this.getUsers[i].ContactNumber && this.PharmacyId == this.getUsers[i].PharmacyId) 
            {
              alert("Contact Number already exists");
              this.isTrue = false;
              break;
            }
          }
          else if(this.Email == this.getUsers[i].Email && this.PharmacyId == this.getUsers[i].PharmacyId)
          {
            alert("Email already exists");
            this.isTrue = false;
            break;
          }

        }
        else if(this.CNIC == this.getUsers[i].CNIC && this.PharmacyId == this.getUsers[i].PharmacyId){
          alert("CNIC already exists");
          this.isTrue = false;
          break;
        }
      }
      else if(this.Designation == this.getUsers[i].Designation._id && this.PharmacyId == this.getUsers[i].PharmacyId)
      {
        alert("Admin already exists");
        this.isTrue = false;
        break;
      }
    }
    if(this.isTrue == true && parseInt(this.Salary) >= 0 && this.DateOfBirth < this.HireDate)
    {
      alert("Hello")
      var admin = {
        Name: this.Name,
        PIN: this.PIN,
        CNIC: this.CNIC,
        Gender: this.Gender,
        Salary: this.Salary,
        Designation: this.Designation,
        DateOfBirth: this.DateOfBirth,
        Address: this.Address,
        PharmacyId: this.PharmacyId,
        Status: this.Status,
        Image: this.image1,
        HireDate: this.HireDate,
        Email: this.Email,
        ContactNumber: this.ContactNumber,
      };
      alert('Admin Added successfully');
      this.result = this.AddAdminService.AddAdminApi(admin);
      // this.result= await lastValueFrom(this.AddAdminService.AddAdminApi(this.admin))
      if (this.result) {
        
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
      this.getAdmin();
      }
    }
    else if(parseInt(this.Salary) < 0 && this.DateOfBirth > this.HireDate) {
      alert('Enter valid input');
    }
    }
    else if(this.getUsers.length == 0)
    {
      if(parseInt(this.Salary) >= 0 && this.DateOfBirth < this.HireDate)
    {
      var admin = {
        Name: this.Name,
        PIN: this.PIN,
        CNIC: this.CNIC,
        Gender: this.Gender,
        Salary: this.Salary,
        Designation: this.Designation,
        DateOfBirth: this.DateOfBirth,
        Address: this.Address,
        PharmacyId: this.PharmacyId,
        Status: this.Status,
        Image: this.image1,
        HireDate: this.HireDate,
        Email: this.Email,
        ContactNumber: this.ContactNumber,
      };
      this.result = this.AddAdminService.AddAdminApi(admin);
      // this.result= await lastValueFrom(this.AddAdminService.AddAdminApi(this.admin))
      if (this.result) {
        alert('Admin Added successfully');
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
      this.getAdmin();
      }
    }
    else if(parseInt(this.Salary) < 0 && this.DateOfBirth > this.HireDate) {
      alert('Enter valid input');
    }
    }
    
  }
  async getPharmacy() {
    this.pharmacies = await lastValueFrom(
      this.AddPharmacyService.getPharmacyApi()
    );
  }
  async get_Users()
  {
    this.getUsers = await lastValueFrom(this.AddEmployeeService.getUserApi());
  }

  async getAdmin() {
    this.AdminData = await lastValueFrom(this.AddAdminService.getAdminApi());
  }
  async getDesignation() {
    this.designations = await lastValueFrom(
      this.AddAdminService.get_designationApi()
    );
    // alert(this.designations[0].Name)
    // alert(this.designations[0]._id)
  }
  async getStatus() {
    this.statuses = await lastValueFrom(this.AddAdminService.get_statusApi());
    // alert(this.statuses[1].Name)
    // alert(this.statuses[1]._id)
  }
  onClickSelected(event: any) {
    console.log(event);
    this.image1 = event.target.files[0];
    console.log(this.image1);
  }
  ngOnInit(): void {
    this.get_Users();
    this.getDesignation();
    this.getStatus();
    this.getPharmacy();
    this.getAdmin();
  }
}
