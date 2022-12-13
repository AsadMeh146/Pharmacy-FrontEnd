import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ManufacturerService } from 'src/app/Services/Admin/Manufacturer-Services/manufacturer.service';
import { ShipperService } from 'src/app/Services/Admin/Shipper-Services/shipper.service';
import { StockService } from 'src/app/Services/Admin/Stock-Services/stock.service';

@Component({
  selector: 'app-order-stock',
  templateUrl: './order-stock.component.html',
  styleUrls: ['./order-stock.component.css']
})
export class OrderStockComponent implements OnInit {

  constructor(public manufacturerService:ManufacturerService,public shipperService:ShipperService,public productService:StockService,public router:Router) { }

  manufacturers:any
  shippers:any
  products:any

  getSeletedManufacturerName:any
  selectedManufacturer:any
  selectedShipper:any
  selectedProduct:any

  public name=""
  public email=""
  public address=""
  public contact=""
  public manufacturerId=""
  public shipperId=""
  public productId=""
  async handleSubmit(){

  };

  async getManufacturer()
  {
    this.manufacturers = await lastValueFrom(this.manufacturerService.getManufacturerApi());
  }
  async getShipper()
  {
    this.shippers = await lastValueFrom(this.shipperService.getShipperApi());
    this.selectedShipper = this.shippers.filter(
      (shipper:any) => shipper.manufacturerDetails._id === this.manufacturerId);
  }
  async getProduct()
  {
    for(let i=0;i<this.manufacturers.length;i++)
    {
      if(this.manufacturers[i]._id == this.manufacturerId)
      {

        this.getSeletedManufacturerName = this.manufacturers[i].name;
        break;
      }
    }
    this.products = await lastValueFrom(this.productService.getProductApi());
    this.selectedProduct = this.products.filter(
      (product:any) => product.manufacturerName === this.getSeletedManufacturerName);
  }
  async setShipper_and_Product()
  {
    this.getShipper();
    this.getProduct();
  }

  ngOnInit(): void {
    this.getManufacturer();
  }

}
