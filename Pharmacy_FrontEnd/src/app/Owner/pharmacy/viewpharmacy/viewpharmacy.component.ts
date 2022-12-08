import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import {AddPharmacyDetailsService} from 'src/app/Services/Owner/Pharmacy/add-pharmacy-details.service';


@Component({
  selector: 'app-viewpharmacy',
  templateUrl: './viewpharmacy.component.html',
  styleUrls: ['./viewpharmacy.component.css']
})


export class ViewpharmacyComponent implements OnInit {
  PharmacyData: any;
  updatePharmacyData:any;
  deletePharmacyInfo : any;
  result:any;
  Id : any;
  public Location = ""
  public ContactNumber = ""
 
  constructor(public pharmacyService:AddPharmacyDetailsService,private router:Router,@Inject(DOCUMENT) document: Document) { }
  
  //get data
  async getPharmacies(){
    this.PharmacyData=await lastValueFrom(this.pharmacyService.getPharmacyApi())
  }

  //set data 
  setPharmacyData(Id:any,Location:any,ContactNumber:any)
  {
    this.Id = Id;
    (<HTMLInputElement>document.getElementById('InputLocation')).value = Location;
    (<HTMLInputElement>document.getElementById('InputContactNumber')).value = ContactNumber;
  }

  //update data
  async updatePharmacyDetails()
  {
    console.log("updated!");
    this.Location = (<HTMLInputElement>document.getElementById('InputLocation')).value
    this.ContactNumber = (<HTMLInputElement>document.getElementById('InputContactNumber')).value
    
    this.updatePharmacyData={
      Location:this.Location,
      ContactNumber:this.ContactNumber,
    }
    this.result=await lastValueFrom(this.pharmacyService.updatePharmacyApi(this.Id,this.updatePharmacyData))
    alert("Updated Successfully");
    this.getPharmacies();
  }

  //delete data
  async deletePharmacyData(Id:any)
  {
    if(confirm("Are you sure you want to delete this data ?") == true)
    {
      this.deletePharmacyInfo = await lastValueFrom(this.pharmacyService.deletePharmacyApi(Id))
      alert("successfully deleted")
      this.getPharmacies();
    }
  }
  
  ngOnInit(): void {
       this.getPharmacies();
      }
}
 

