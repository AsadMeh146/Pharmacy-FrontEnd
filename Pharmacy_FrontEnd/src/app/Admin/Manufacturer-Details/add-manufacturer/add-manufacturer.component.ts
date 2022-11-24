import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ManufacturerService } from 'src/app/Services/Admin/Manufacturer-Services/manufacturer.service';

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html',
  styleUrls: ['./add-manufacturer.component.css']
})
export class AddManufacturerComponent implements OnInit {

  constructor(public ManufacturerService:ManufacturerService,private router:Router) { }
  user:any
  result:any
  public name=""
  public email=""
  public address=""
  public contact=""
  async handleSubmit(){
    this.user={
      name:this.name,
      email:this.email,
      address:this.address,
      contact:this.contact
    }
    this.result=await lastValueFrom(this.ManufacturerService.registerManufacturerApi(this.user))
    if(this.result){
      alert("User is registered successfully")
    }
    else{
      alert("Ooops Error")
    }
  }

  ngOnInit(): void {
  }

}
