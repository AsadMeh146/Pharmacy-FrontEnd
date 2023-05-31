import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { StockService } from 'src/app/Services/Admin/Stock-Services/stock.service';
import { ManufacturerService } from 'src/app/Services/Admin/Manufacturer-Services/manufacturer.service';
import { LookupService } from 'src/app/Services/Lookup/lookup.service';
import { login_user } from 'src/app/class/user';
import { SigninService } from 'src/app/Services/SignIn/signin.service';
@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  stock:any
  result:any
  manufacturers:any
  pharmacyId:any
  getUser:any
  products:any
  productCategories:any
  isTrue = false;
  public name=""
  public category=""
  public description=""
  public strength=""
  public manufacturerName=""
  constructor(public StockService:StockService,public signInService:SigninService,public ManufacturerService:ManufacturerService,public LookupService:LookupService,private router:Router) { }
  async getManufaturers(){
    this.manufacturers=await lastValueFrom(this.ManufacturerService.getManufacturerApi())
  }
  async getProductCategory(){
    this.productCategories=await lastValueFrom(this.LookupService.getProductCategoryApi())
  };
  async handleSubmit(){
    if(this.products.length > 0 )
    {
      for(let i=0;i<this.products.length;i++)
    {
      if(this.name == this.products[i].name && this.category == this.products[i].category._id && this.strength == this.products[i].strength && this.manufacturerName == this.products[i].manufacturerName &&this.pharmacyId == this.products[i].pharmacyId)
      {
        alert("Product already exists");
        this.isTrue = false;
        break;
      }      
      else
        {
          this.isTrue = true;

        }
     
      
    }
    if(this.isTrue == true)
    {
      this.stock={
        name:this.name,
        category:this.category,
        strength:this.strength,
        description:this.description,
        manufacturerName:this.manufacturerName,
        pharmacyId:this.pharmacyId
      }
      this.result=await lastValueFrom(this.StockService.registerStockApi(this.stock))
      if(this.result){
        alert("Stock is registered successfully")
        this.name = "",
        this.category = "",
        this.strength = "",
        this.description = "",
        this.manufacturerName = "",
        this.getProducts();
  
      }
    }
    }
    else if(this.products.length == 0)
    {
      this.stock={
        name:this.name,
        category:this.category,
        strength:this.strength,
        description:this.description,
        manufacturerName:this.manufacturerName,
        pharmacyId:this.pharmacyId
      }
      this.result=await lastValueFrom(this.StockService.registerStockApi(this.stock))
      if(this.result){
        alert("Stock is registered successfully")
        this.name = "",
        this.category = "",
        this.strength = "",
        this.description = "",
        this.manufacturerName = "",
        this.getProducts();
  
      }
    }
    
  }
  async getProducts()
  {
    this.products=await lastValueFrom(this.StockService.getProductApi(this.pharmacyId))
  }

  ngOnInit(): void {
    this.getUser = this.signInService.getLoginUser();
    this.pharmacyId = this.getUser[0].PharmacyId;
    this.getProducts();
    this.getManufaturers();
    this.getProductCategory();
  }
}
