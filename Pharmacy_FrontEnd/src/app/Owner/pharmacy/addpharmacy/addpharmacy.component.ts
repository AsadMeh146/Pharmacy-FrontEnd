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
  get_Pharmacy:any
  result:any
  // public Id=""
  public Location=""
  public  ContactNumber=""
  public isTrue = false;
  async handleSubmit(){
    for(let i=0;i<this.get_Pharmacy.length;i++)
    {
      if(this.Location != this.get_Pharmacy[i].Location)
      {
        if(this.ContactNumber != this.get_Pharmacy[i].ContactNumber)
        {
          this.isTrue = true;
        }
        else
        {
          alert("Contact already exists");
          this.isTrue = false;
          break;
        }
      }
      else
      {
        alert("Pharmacy already exists");
        this.isTrue = false;
          break;
      }
    }
    if(this.isTrue == true)
    {
      this.pharmacy={
        // Id:this.Id,
        Location:this.Location,
        ContactNumber:this.ContactNumber,
      }
    console.log("hi");

      this.result= await lastValueFrom(this.AddPharmcayService.addPharmacyApi(this.pharmacy))
      if(this.result){
        alert("Pharmacy Added successfully")
        this.Location = "";
        this.ContactNumber = "";
        this.getPharmacy();

        // this.router.navigate([''])
      }
    }

  }
  async getPharmacy()
  {
    this.get_Pharmacy = await lastValueFrom(this.AddPharmcayService.getPharmacyApi());
  }

  

  ngOnInit(): void {
    this.getPharmacy();
  }

}
