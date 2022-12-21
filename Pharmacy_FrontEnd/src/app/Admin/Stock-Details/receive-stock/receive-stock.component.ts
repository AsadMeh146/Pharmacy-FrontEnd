import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ManufacturerService } from 'src/app/Services/Admin/Manufacturer-Services/manufacturer.service';
import { ShipperService } from 'src/app/Services/Admin/Shipper-Services/shipper.service';
import { StockService } from 'src/app/Services/Admin/Stock-Services/stock.service';
import { SigninService } from 'src/app/Services/SignIn/signin.service';

@Component({
  selector: 'app-receive-stock',
  templateUrl: './receive-stock.component.html',
  styleUrls: ['./receive-stock.component.css']
})
export class ReceiveStockComponent implements OnInit {

  constructor(public signInService:SigninService,public stockService:StockService) { }
  getProduct:any
  stockOrder:any
  addStock: Array<any> = [];
  indexOfObject:any
  public orderId = ""
  public manufacturerDate = ""
  public expiryDate = ""
  public unitPrice = ""
  public salePrice = ""
  public receiveDate:any
  updateProduct:any
  manufacturerId:any
  manufacturerName:any
  productName:any
  productId:any
  productQuantity:any
  result:any
  updateStockOrder:any
  stockorderId:any
  updateStockDetails:any
  stockDetails:any
  async handleSubmit()
  {
    this.stockOrder = await lastValueFrom(this.stockService.getOrderStockApi(this.orderId));
    if(this.stockOrder.length == 0)
    {
      alert("Order not exist");
    }
  }
  setProductValue(stockorderId:any,manufacturerId:any,manufacturerName:any,productId:any,productName:any,productQuantity:any)
  {
    this.manufacturerId = manufacturerId
    this.manufacturerName = manufacturerName
    this.productId = productId
    this.productName = productName
    this.productQuantity = productQuantity
    this.stockorderId = stockorderId
  }
  async receiveOrder()
  {
    if(this.stockOrder.length > 0)
    {
      alert("Stock is not received yet");
    }
    else if(this.stockOrder.length == 0)
    {
      this.receiveDate = new Date()
      this.updateStockOrder = {
        shipDate:this.receiveDate
      }
      this.result = await lastValueFrom(this.stockService.updateStockOrder(this.stockorderId,this.updateStockOrder))

      for(let i=0;i<this.addStock.length;i++)
      {
        this.stockDetails = 
        {
          stockId:this.addStock[i].productId,
          manufacturerDate:this.addStock[i].manufacturerDate,
          expiryDate:this.addStock[i].expiryDate,
          unitPrice:this.addStock[i].unitPrice,
          salePrice:this.addStock[i].salePrice,
          quantity:this.addStock[i].productQuantity
        }
        this.updateStockDetails = await lastValueFrom(this.stockService.addStockDetails(this.stockDetails))
      }
      alert("Order received successfully");
      this.orderId = "";
    }
  }
  updateStock()
  {
    if(this.expiryDate > this.manufacturerDate && parseInt(this.salePrice) > parseInt(this.unitPrice))
    {
      if(confirm('Are you sure you have entered right details?') == true)
    {
      this.getProduct = {
        manufacturerId:this.manufacturerId,
        productId:this.productId,
        productQuantity:this.productQuantity,
        manufacturerDate:this.manufacturerDate,
        expiryDate:this.expiryDate,
        unitPrice:this.unitPrice,
        salePrice:this.salePrice
      };
      this.addStock.push(this.getProduct);
      this.indexOfObject = this.stockOrder.findIndex((object:any) => {
        return object.product_details._id === this.productId;
      });
      for(let i=0;i<this.stockOrder.length;i++)
      {
        if(this.stockOrder[i].product_details._id == this.productId)
        {
          this.stockOrder.splice(this.indexOfObject, 1);
        }
      }
      this.manufacturerDate = ""
      this.expiryDate = ""
      this.unitPrice = ""
      this.salePrice = ""
    }
    }
    else
    {
      alert("Enter valid details");
    }
    
    
  }

  ngOnInit(): void {

  }

}
