import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ManufacturerService } from 'src/app/Services/Admin/Manufacturer-Services/manufacturer.service';
import { ShipperService } from 'src/app/Services/Admin/Shipper-Services/shipper.service';
import { StockService } from 'src/app/Services/Admin/Stock-Services/stock.service';
import { login_user } from 'src/app/class/user';


@Component({
  selector: 'app-order-stock',
  templateUrl: './order-stock.component.html',
  styleUrls: ['./order-stock.component.css'],

})
export class OrderStockComponent implements OnInit {

  constructor(public manufacturerService:ManufacturerService,public shipperService:ShipperService,public productService:StockService,public stockService:StockService,public router:Router) {
   }
   disabledValue = false;
   myDate = new Date();
  loginobj = login_user;
  manufacturers:any
  shippers:any
  products:any
  product:any
  indexOfObject:any
  orderProduct: Array<any> = [];
  getProducts:Array<any> = [];
  // getProductQuantity:Array<any> = [];
  getProductDetails:any
  getSeletedManufacturerName:any
  selectedManufacturer:any
  selectedShipper:any
  selectedProduct:any
  updatedquantity:any
  public manufacturerId=""
  public shipperId=""
  public productId=""
  public manufacturerName=""
  public shipperName=""
  public productName=""
  public productCategory=""
  public productStrength=""
  public quantity=""
  public pharmacyId=String
  orderedProduct:any
  result:any
  orderManufacturer:any
  orderShipper:any

  async handleSubmit(){
      if(parseInt(this.quantity)>0)
      {
        for(let i=0;i<this.manufacturers.length;i++)
        {
          if(this.manufacturers[i]._id == this.manufacturerId)
          {
            this.manufacturerName = this.manufacturers[i].name;
            break;
          }
        }
        for(let i=0;i<this.shippers.length;i++)
        {
          if(this.shippers[i]._id == this.shipperId)
          {
            this.shipperName = this.shippers[i].name;
            break;
          }
        }
        for(let i=0;i<this.products.length;i++)
        {
          if(this.products[i]._id == this.productId)
          {
            this.productName = this.products[i].name;
            this.productCategory = this.products[i].category.Name;
            this.productStrength = this.products[i].strength;
            break;
          }
        }
        this.product={
          manufacturerName:this.manufacturerName,
          shipperName:this.shipperName,
          productName:this.productName,
          productCategory:this.productCategory,
          productStrength:this.productStrength,
          manufacturerId:this.manufacturerId,
          shipperId:this.shipperId,
          productId:this.productId,
          quantity:this.quantity
        };
        alert("Added");
        this.orderProduct.push(this.product);
        this.quantity="";
        this.disabledValue = true;

      }
      else if(parseInt(this.quantity)<0)
      {
         alert("Enter valid quantity");
      }
  };
  // set value and update stock
  async setProductValues(productId:any,quantity:any)
  {

    this.productId = productId,
    this.updatedquantity = quantity

  }
  async updateProduct()
  {
    if(parseInt(this.updatedquantity)>0)
    {
      for(let i=0;i<this.orderProduct.length;i++)
      {
       if(this.orderProduct[i].productId == this.productId)
        {
          this.orderProduct[i].quantity = this.updatedquantity;
          alert("Updated Successfully")
          break
        }
      }

    }
    else if(parseInt(this.updatedquantity)<0)
    {
      alert("Enter Valid quantity");
    }
  }
  // delete order product
  async deleteProduct(productId:any)
  {
    if(confirm('Are you sure to delete the record ?') == true)
    {
      this.indexOfObject = this.orderProduct.findIndex((object) => {
        return object.productId === productId;
      });
      for(let i=0;i<this.orderProduct.length;i++)
      {
        if(this.orderProduct[i].productId == productId)
        {
          this.orderProduct.splice(this.indexOfObject, 1);
        }
      }
      alert("Successfully")
      if(this.orderProduct.length == 0)
      {
        this.disabledValue = false;
      }
    }
  }

  async placeOrder()
  {
    // this.orderedProduct = {
    //   manufacturerId:this.orderProduct[i].manufacturerId,
    //   shipperId:this.orderProduct[i].shipperId,
    //   products:[this.orderProduct[i].productId],
    // };
    for(let i=0;i<this.orderProduct.length;i++)
    {
      this.getProductDetails = {
        productId:this.orderProduct[i].productId,
        productQuantity:this.orderProduct[i].quantity
      }
      this.getProducts.push(this.getProductDetails)
      this.orderManufacturer = this.orderProduct[i].manufacturerId;
      this.orderShipper = this.orderProduct[i].shipperId;
    }
    this.orderedProduct = {
      orderId:Math.floor(100000 + Math.random() * 900000),
      manufacturerId:this.orderManufacturer,
      shipperId:this.orderShipper,
      productDetails:this.getProducts,
      orderDate:this.myDate,
      shipDate:null,
      pharmacyId:this.pharmacyId
    }
    alert(this.orderedProduct.pharmacyId)
    this.result=await lastValueFrom(this.stockService.orderStockApi(this.orderedProduct))
    alert("Added")
    this.orderProduct = []
  }
  // get manufacturer,shipper and product from backend
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
    this.loginobj = login_user.GetInstance()
    this.pharmacyId = this.loginobj.login_pharmacyId;
  }

}
