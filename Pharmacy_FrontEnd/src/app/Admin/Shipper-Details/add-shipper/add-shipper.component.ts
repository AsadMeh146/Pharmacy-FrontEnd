import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ShipperService } from 'src/app/Services/Admin/Shipper-Services/shipper.service';
import { ManufacturerService } from 'src/app/Services/Admin/Manufacturer-Services/manufacturer.service';

@Component({
  selector: 'app-add-shipper',
  templateUrl: './add-shipper.component.html',
  styleUrls: ['./add-shipper.component.css']
})
export class AddShipperComponent implements OnInit {

  constructor(public ShipperService:ShipperService,public ManufacturerService:ManufacturerService,private router:Router) { }

  user:any
  result:any
  manufacturers:any
  public name=""
  public email=""
  public address=""
  public contact=""
  public manufacturerId = ""
  shippers:any
  isTrue:any


  async getManufaturers(){
    this.manufacturers=await lastValueFrom(this.ManufacturerService.getManufacturerApi())
  };

  async handleSubmit(){
    if(this.shippers.length > 0)
    {
      for(let i=0;i<this.shippers.length;i++)
    {
        if(this.name != this.shippers[i].name)
        {
          if(this.email != this.shippers[i].email)
          {
            if(this.contact != this.shippers[i].contact)
            {
              this.isTrue = true;
              
            }
            else
            {
              alert("Contact Number already exists");
              this.isTrue = false;
              break;
            }
          }
          else
          {
            alert("Email already exists");
            this.isTrue = false;
            break;
          }

        }
        else
        {
          alert("Shipper already exists");
          this.isTrue = false;
          break;
        }   
    }
    if(this.isTrue == true)
    {
      this.user={
        name:this.name,
        email:this.email,
        address:this.address,
        manufacturerId:this.manufacturerId,
        contact:this.contact,
      }
      this.result=await lastValueFrom(this.ShipperService.registerShipperApi(this.user))
      if(this.result){
        alert("Shipper is registered successfully")
        this.name = "";
        this.email = "";
        this.address = "";
        this.contact = "";
        this.manufacturerId = "";

        this. getShippers();
      }
    }
    
    else{
      alert("Invalid Input. Try Again")
    }
    }
    else if(this.shippers.length == 0)
    {
      this.user={
        name:this.name,
        email:this.email,
        address:this.address,
        manufacturerId:this.manufacturerId,
        contact:this.contact,
      }
      this.result=await lastValueFrom(this.ShipperService.registerShipperApi(this.user))
      if(this.result){
        alert("Shipper is registered successfully")
        this.name = "";
        this.email = "";
        this.address = "";
        this.contact = "";
        this.manufacturerId = "";

        this. getShippers();
      }
    }
    
  }
  async getShippers()
  {
    this.shippers=await lastValueFrom(this.ShipperService.getShipperApi())
  }

  ngOnInit(): void {
    this.getManufaturers();
    this. getShippers();
  }

}
