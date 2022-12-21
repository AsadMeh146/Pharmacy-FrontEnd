import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { StockService } from 'src/app/Services/Admin/Stock-Services/stock.service';
import { CustomerDetailsService } from 'src/app/Services/Employee/CustomerDetails/customer-details.service';
import { SigninService } from 'src/app/Services/SignIn/signin.service';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  constructor(public customerOrderService:CustomerDetailsService,public stockService:StockService,public signInService:SigninService,private router:Router) { }
  stock:any
  pharmacyId:any
  getUser:any
  searchText:any
  result:any
  
  async getStock()
  {
    this.stock = await lastValueFrom(this.customerOrderService.getStockApi(this.pharmacyId))
  }
  async deleteProduct(stockDetailId:any)
  {
    if(confirm('Are you sure to delete the record ?') == true)
    {
    this.result = await lastValueFrom(this.stockService.deleteStockDetail(stockDetailId));
    this.getStock();
    }
  }

  ngOnInit(): void {
    this.getUser = this.signInService.getLoginUser();
    this.pharmacyId = this.getUser[0].PharmacyId; 
    this.getStock();
  }

}
