


import { Component, OnInit } from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ShipperService } from 'src/app/Services/Admin/Shipper-Services/shipper.service';
import { ManufacturerService } from 'src/app/Services/Admin/Manufacturer-Services/manufacturer.service';

@Component({
  selector: 'app-edit-shipper',
  templateUrl: './edit-shipper.component.html',
  styleUrls: ['./edit-shipper.component.css']
})
export class EditShipperComponent implements OnInit {
  manufacturers:any
  shippers:any
  shipper_update:any
  result:any
  public name=""
  public email=""
  public address=""
  public contact=""
  public manufacturerId=""
  public setmanufacturerName=""

  shipperId:any
  shipper_delete:any


  constructor(public ShipperService:ShipperService,public ManufacturerService:ManufacturerService,private router:Router,@Inject(DOCUMENT) document: Document) { }
  async getManufaturers(){
    this.manufacturers=await lastValueFrom(this.ManufacturerService.getManufacturerApi())
  }
  async getShippers()
  {
    this.shippers=await lastValueFrom(this.ShipperService.getShipperApi())
  }
  async deleteShipper(shipperId:any)
  {
    if(confirm('Are you sure to delete the record ?') == true)
    {
      this.shipper_delete=await lastValueFrom(this.ShipperService.deleteShipperApi(shipperId))
      alert("Successfully")
    }
  }
  async updateShipper()
  {
    this.name = (<HTMLInputElement>document.getElementById('Inputname')).value
    this.email = (<HTMLInputElement>document.getElementById('Inputemail')).value
    this.contact = (<HTMLInputElement>document.getElementById('Inputconact')).value
    this.address = (<HTMLInputElement>document.getElementById('Inputaddress')).value
    for(let i=0;i<this.manufacturers.length;i++)
    {
      if(this.manufacturerId == this.manufacturers[i].name)
      {
        this.manufacturerId = this.manufacturers[i]._id;
      }
    }
    this.shipper_update={
      name:this.name,
      email:this.email,
      address:this.address,
      manufacturerId:this.manufacturerId,
      contact:this.contact,
    }
    this.result=await lastValueFrom(this.ShipperService.updateShipperApi(this.shipperId,this.shipper_update))
  }
  async setShipper(shipperId:any,shipperName:any,manufacturerId:any,shipperContact:any,shipperAddress:any,shipperEmail:any)
  {

    this.shipperId = shipperId;
    this.manufacturerId = manufacturerId;
    (<HTMLInputElement>document.getElementById('Inputname')).value = shipperName;
    (<HTMLInputElement>document.getElementById('Inputemail')).value = shipperEmail;
    (<HTMLInputElement>document.getElementById('Inputconact')).value = shipperContact;
    (<HTMLInputElement>document.getElementById('Inputaddress')).value = shipperAddress;
  }
  ngOnInit(): void {
    this.getShippers();
    this.getManufaturers();
  }

}
