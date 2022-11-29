import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import {AddPharmacyDetailsService} from 'src/app/Services/Owner/Pharmacy/add-pharmacy-details.service';
@Component({
  selector: 'app-addpharmacy',
  templateUrl: './addpharmacy.component.html',
  styleUrls: ['./addpharmacy.component.css']
})
export class AddpharmacyComponent implements OnInit {
  constructor(public AddPharmcayService:AddPharmacyDetailsService,private router:Router) { }
  pharmacy:any
  result:any
  public Location=""
  public  ContactNumber=""
  async handleSubmit(){
    this.pharmacy={
      Location:this.Location,
      ContactNumber:this.ContactNumber,
     
    }
    this.result= await lastValueFrom(this.AddPharmcayService.addPharmacyApi(this.pharmacy))
    if(this.result){
      alert("Pharmacy Added successfully")
    }
    else{
      alert("Ooops Error")
    }
  }

  

  ngOnInit(): void {
  }

}
