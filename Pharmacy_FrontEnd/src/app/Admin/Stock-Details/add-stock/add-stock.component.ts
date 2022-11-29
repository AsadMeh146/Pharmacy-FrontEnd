import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { StockService } from 'src/app/Services/Admin/Stock-Services/stock.service';
import { ManufacturerService } from 'src/app/Services/Admin/Manufacturer-Services/manufacturer.service';
import { LookupService } from 'src/app/Services/Lookup/lookup.service';
@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  stock:any
  result:any
  manufacturers:any
  productCategories:any
  public name=""
  public category=""
  public description=""
  public strength=""
  public manufacturerName=""
  public pharmacyId = "6380920946c6abc3c48115dc";
  constructor(public StockService:StockService,public ManufacturerService:ManufacturerService,public LookupService:LookupService,private router:Router) { }
  async getManufaturers(){
    this.manufacturers=await lastValueFrom(this.ManufacturerService.getManufacturerApi())
  }
  async getProductCategory(){
    this.productCategories=await lastValueFrom(this.LookupService.getProductCategoryApi())
  };
  async handleSubmit(){
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
    }
    else{
      alert("Ooops Error")
    }
  }
  ngOnInit(): void {
    this.getManufaturers();
    this.getProductCategory();
  }
}
