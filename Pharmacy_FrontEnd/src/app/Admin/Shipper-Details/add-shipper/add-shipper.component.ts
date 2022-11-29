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

  async getManufaturers(){
    this.manufacturers=await lastValueFrom(this.ManufacturerService.getManufacturerApi())
  };


  async handleSubmit(){

    this.user={
      name:this.name,
      email:this.email,
      address:this.address,
      manufacturerId:this.manufacturerId,
      contact:this.contact,

    }
    this.result=await lastValueFrom(this.ShipperService.registerShipperApi(this.user))
    if(this.result){
      alert("User is registered successfully")
    }
    else{
      alert("Ooops Error")
    }
  }

  ngOnInit(): void {
    this.getManufaturers();
  }

}
