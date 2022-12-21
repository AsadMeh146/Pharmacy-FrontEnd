import { Component, OnInit } from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ManufacturerService } from 'src/app/Services/Admin/Manufacturer-Services/manufacturer.service';

@Component({
  selector: 'app-edit-manufacturer',
  templateUrl: './edit-manufacturer.component.html',
  styleUrls: ['./edit-manufacturer.component.css']
})
export class EditManufacturerComponent implements OnInit {
  manufacturers:any
  manufacturer_update:any
  result:any
  searchText:any
  public name=""
  public email=""
  public address=""
  public contact=""
  manufacturerId:any
  manufacturer_delete:any
  constructor(public ManufacturerService:ManufacturerService,private router:Router,@Inject(DOCUMENT) document: Document) {

  }
  async getManufaturers(){
    this.manufacturers=await lastValueFrom(this.ManufacturerService.getManufacturerApi())
  }
  async deleteManufacturers(manufacturerId:any)
  {
    if(confirm('Are you sure to delete the record ?') == true)
    {
      this.manufacturer_delete=await lastValueFrom(this.ManufacturerService.deleteManufacturerApi(manufacturerId))
      alert("Successfully");
      this.getManufaturers();
    }
  }
  setManufacturerValues(manufacturerId:any,manufacturerName:any,manufacturerContact:any,manufacturerAddress:any,manufacturerEmail:any)
  {
    this.manufacturerId = manufacturerId;
    (<HTMLInputElement>document.getElementById('InputName')).value = manufacturerName;
    (<HTMLInputElement>document.getElementById('Inputemail')).value = manufacturerEmail;
    (<HTMLInputElement>document.getElementById('Inputconact')).value = manufacturerContact;
    (<HTMLInputElement>document.getElementById('Inputaddress')).value = manufacturerAddress;
  }
  async updateManufacturer()
  {
    this.name = (<HTMLInputElement>document.getElementById('InputName')).value
    this.email = (<HTMLInputElement>document.getElementById('Inputemail')).value
    this.contact = (<HTMLInputElement>document.getElementById('Inputconact')).value
    this.address = (<HTMLInputElement>document.getElementById('Inputaddress')).value
    this.manufacturer_update={
      name:this.name,
      email:this.email,
      address:this.address,
      contact:this.contact,
    }
    this.result=await lastValueFrom(this.ManufacturerService.updateManufacturerApi(this.manufacturerId,this.manufacturer_update))
    alert("Updated successfully");
    this.name = "";
    this.email = "";
    this.address = "";
    this.contact = "";
    this.getManufaturers();
  }

  ngOnInit(): void {
    this.getManufaturers();
  }

}
