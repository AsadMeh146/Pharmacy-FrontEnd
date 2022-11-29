import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { LookupService } from 'src/app/Services/Lookup/lookup.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  public name = "";
  public category = "";
  public user:any
  public result:any
  public setCategories = [
    { "name": "Designation" , "category": "EMPLOYEE_DESIGNATION" },
    { "name": "Product", "category": "PRODUCT_CATEGORY" },
    { "name": "Discount", "category": "ORDER_DISCOUNT" }
  ];
  constructor(public LookupService:LookupService,public router:Router) { }
  async handleSubmit()
  {
    this.user={
      Name:this.name,
      Category:this.category
    }
    alert(this.user.Category)
    this.result=await lastValueFrom(this.LookupService.registerCategoryApi(this.user))
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
