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
  manufacturers:any
  isTrue = false;

  async getManufaturers(){
    this.manufacturers=await lastValueFrom(this.ManufacturerService.getManufacturerApi())
  }
  async handleSubmit(){
    if(this.manufacturers.length > 0)
    {
      for(let i=0;i<this.manufacturers.length;i++)
    {
      alert("Checking")
        if(this.name != this.manufacturers[i].name)
        {
          if(this.email != this.manufacturers[i].email)
          {
            if(this.contact != this.manufacturers[i].contact)
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
          alert("Manufacturer already exists");
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
        contact:this.contact
      }
      this.result=await lastValueFrom(this.ManufacturerService.registerManufacturerApi(this.user))
      if(this.result){
        alert("User is registered successfully")
        this.name = "";
        this.email = "";
        this.address = "";
        this.contact = "";
        this.getManufaturers();

      }
      else{
        alert("Invalid input. Try Again")
      }
    }

    }
    else if(this.manufacturers.length == 0)
    {
      this.user={
        name:this.name,
        email:this.email,
        address:this.address,
        contact:this.contact
      }
      this.result=await lastValueFrom(this.ManufacturerService.registerManufacturerApi(this.user))
      if(this.result){
        alert("User is registered successfully")
        this.name = "";
        this.email = "";
        this.address = "";
        this.contact = "";
        this.getManufaturers();

      }
      else{
        alert("Invalid input. Try Again")
      }
    }
    
    
    
  }

  ngOnInit(): void {
    this.getManufaturers();
  }

}
