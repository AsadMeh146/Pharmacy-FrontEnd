import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import {AdminService} from 'src/app/Services/Owner/Admin/admin.service';
import { AddPharmacyDetailsService } from 'src/app/Services/Owner/Pharmacy/add-pharmacy-details.service';
@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {
  pharmacyRequests:any;
  AdminData: any;
 
  constructor(public AdminService:AdminService,private router:Router ,public AddPharmacyDetailsService:AddPharmacyDetailsService) { }
  async getAdminData(){
    this.AdminData=await lastValueFrom(this.AdminService.getAdminApi())
    
  }
  
  async getpharmacyDetails(){
    console.log("Hello");
    this.pharmacyRequests=await lastValueFrom(this.AddPharmacyDetailsService.getPharmacyApi())
    console.log("World")
  };

  
  ngOnInit(): void {
    this.getAdminData();
    //this.getpharmacyDetails();
  }

}
