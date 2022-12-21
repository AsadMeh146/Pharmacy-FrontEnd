import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { StockService } from 'src/app/Services/Admin/Stock-Services/stock.service';
import { ManufacturerService } from 'src/app/Services/Admin/Manufacturer-Services/manufacturer.service';
import { LookupService } from 'src/app/Services/Lookup/lookup.service';
import { SigninService } from 'src/app/Services/SignIn/signin.service';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {
  manufacturers:any
  productCategories:any
  products:any
  product_delete:any
  product_update:any
  result:any
  pharmacyId:any
  getUser:any

  public productId=""
  public name=""
  public description=""
  public strength=""
  public manufacturerName=""
  public categoryId=""
  public categoryName=""
  searchText:any


  constructor(public StockService:StockService,public signInService:SigninService,public ManufacturerService:ManufacturerService,public LookupService:LookupService,private router:Router) { }
  async getProducts()
  {
    this.products=await lastValueFrom(this.StockService.getProductApi(this.pharmacyId))
  }
  async getManufaturers(){
    this.manufacturers=await lastValueFrom(this.ManufacturerService.getManufacturerApi())
  }
  async getProductCategory(){
    this.productCategories=await lastValueFrom(this.LookupService.getProductCategoryApi())
  };
  async deleteProduct(productId:any)
  {
    if(confirm('Are you sure to delete the record ?') == true)
    {
      this.product_delete=await lastValueFrom(this.StockService.deleteProductApi(productId))
      alert("Successfully");
      this.getProducts();
    }
  }
  async updateProduct()
  {
    this.name = (<HTMLInputElement>document.getElementById('Inputname')).value;
    this.strength = (<HTMLInputElement>document.getElementById('Inputstrength')).value;
    this.description = (<HTMLInputElement>document.getElementById('Inputdescription')).value;

    for(let i=0;i<this.productCategories.length;i++)
    {
      if(this.categoryName == this.productCategories[i].Name)
      {
        this.categoryId = this.productCategories[i]._id;
        break;
      }
    }
    this.product_update={
      name:this.name,
      category:this.categoryId,
      strength:this.strength,
      description:this.description,
      manufacturerName:this.manufacturerName,
    }
    alert(this.product_update.manufacturerName)
    this.result=await lastValueFrom(this.StockService.updateProductApi(this.productId,this.product_update))
    alert("Update Successfully");
    this.getProducts();
  }
  async setProductValues(productId:any,productName:any,productCategory:any,productStrength:any,productDescription:any,productManufacturer:any,pharmacyId:any)
  {
    this.productId = productId;
    this.categoryName = productCategory;
    this.manufacturerName = productManufacturer;
    (<HTMLInputElement>document.getElementById('Inputname')).value = productName;
    (<HTMLInputElement>document.getElementById('Inputstrength')).value = productStrength;
    (<HTMLInputElement>document.getElementById('Inputdescription')).value = productDescription;
    // this.pharmacyId = pharmacyId;
  }

  ngOnInit(): void {
    this.getUser = this.signInService.getLoginUser();
    this.pharmacyId = this.getUser[0].PharmacyId;
    this.getProducts();
    this.getManufaturers();
    this.getProductCategory();
  }

}
