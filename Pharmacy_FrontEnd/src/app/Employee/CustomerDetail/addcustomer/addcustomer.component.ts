import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { last, lastValueFrom } from 'rxjs';
import { CustomerDetailsService } from 'src/app/Services/Employee/CustomerDetails/customer-details.service';
import { SigninService } from 'src/app/Services/SignIn/signin.service';
import { StockService } from 'src/app/Services/Admin/Stock-Services/stock.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  constructor(public customerOrderService:CustomerDetailsService,public stockService:StockService,public signInService:SigninService,private router:Router) { }
  stock:any;
  getUser:any;
  pharmacyId:any;
  customerOrder:any;
  placeOrders:Array<any> = [];
  updateOrders:Array<any> = [];
  addDetails:Array<any> = [];
  manufacturerName:any
  productCategory:any
  productName:any
  productStrength:any
  productid:any
  uniqueStock:any
  public getQuantity = 0;
  public productId="";
  public quantity = "";
  public addQuantity = 0;
  indexOfObject:any
  index_Of_Object:any
  public isTrue = true
  public showQuantity = 0;
  updateQuantity:any
  selectedProduct:any
  public customerName = "";
  public customerContact = "";
  customer:any
  result:any
  updateStock:any
  getStocks:any
  remainingQuantity=0;
  calculateBill = 0;
  orderDetails:any
  get_result:any
  
  async placeOrder()
  {
    let getorderId = Math.floor(100000 + Math.random() * 900000); 
    this.customer = {
      orderId:getorderId,
      name:this.customerName,
      contact:this.customerContact,
      pharmacyId:this.pharmacyId
    };

    this.result = await lastValueFrom(this.customerOrderService.addCustomerOrder(this.customer));
    for(let i=0;i<this.addDetails.length;i++)
    {
      this.orderDetails = {
        orderId:getorderId,
        productId:this.addDetails[i].productid,
        quantity:this.addDetails[i].productQuantity
      }
      this.get_result = await lastValueFrom(this.customerOrderService.addCustomerOrderDetails(this.orderDetails));
    }
    for(let i=0;i<this.placeOrders.length;i++)
    {
      for(let j=0;j<this.stock.length;j++)
      {
        if(this.placeOrders[i].productid == this.stock[j]._id)
        {
          if(this.stock[j].stockDetails.quantity > this.placeOrders[i].productQuantity)
          {
            this.remainingQuantity = parseInt(this.stock[j].stockDetails.quantity) - parseInt(this.placeOrders[i].productQuantity);
            this.updateStock = {
              stockDetails:this.stock[j].stockDetails._id,
              quantity:this.remainingQuantity,
              quantities:parseInt(this.placeOrders[i].productQuantity),
              salePrice:this.stock[j].stockDetails.salePrice,
              check_quantity:0
            }
            this.updateOrders.push(this.updateStock);
            break;
          }
          else if(this.stock[j].stockDetails.quantity <= this.placeOrders[i].productQuantity)
          {
            this.placeOrders[i].productQuantity = parseInt(this.placeOrders[i].productQuantity) - parseInt(this.stock[j].stockDetails.quantity)
            this.remainingQuantity = 0;
            this.updateStock = {
              stockDetails:this.stock[j].stockDetails._id,
              quantity:this.remainingQuantity,
              quantities:0,
              check_quantity:parseInt(this.stock[j].stockDetails.quantity),
              salePrice:this.stock[j].stockDetails.salePrice
            }
            this.updateOrders.push(this.updateStock);
          }
        }
      } 
    }
    for(let i=0;i<this.updateOrders.length;i++)
    {
      this.getStocks = await lastValueFrom(this.stockService.updateStockDetails(this.updateOrders[i],this.updateOrders[i].stockDetails))
      if(this.updateOrders[i].check_quantity == 0)
      { 
        this.calculateBill += parseInt(this.updateOrders[i].quantities) * parseInt(this.updateOrders[i].salePrice) 
      }
      else if(this.updateOrders[i].check_quantity>0)
      {
        this.calculateBill += parseInt(this.updateOrders[i].check_quantity) * parseInt(this.updateOrders[i].salePrice)
      }
    }
    alert("Total Bill : " + this.calculateBill)
    alert("Order successfully");
    this.placeOrders = [];
    this.getStock();

  }

  async handleSubmit()
  {
    if(parseInt(this.quantity)>0)
    {
      for(let i=0;i<this.stock.length;i++)
      {
        if(this.stock[i]._id == this.productId)
        {
          this.getQuantity += parseInt(this.stock[i].stockDetails.quantity);
          this.productid = this.stock[i]._id;
          this.productCategory = this.stock[i].category.Name;
          this.productName=this.stock[i].name;
          this.productStrength = this.stock[i].strength;
          this.manufacturerName = this.stock[i].manufacturerName;
        }
      }
      if(parseInt(this.quantity) <= this.getQuantity)
      {
        this.customerOrder = {
          manufacturerName:this.manufacturerName,
          productid:this.productid,
          productName:this.productName,
          productStrength:this.productStrength,
          productCategory:this.productCategory,
          productQuantity:this.quantity
        };
        for(let i=0;i<this.placeOrders.length;i++)
        {
          if(this.placeOrders[i].productid == this.customerOrder.productid)
          {
            if(this.getQuantity >= (parseInt(this.placeOrders[i].productQuantity) + parseInt(this.quantity)))
            {
              this.addQuantity = parseInt(this.placeOrders[i].productQuantity) + parseInt(this.quantity);
              this.placeOrders[i].productQuantity = this.addQuantity;
              this.addDetails[i].productQuantity = this.addQuantity;
              this.quantity="";
              this.getQuantity = 0;
              this.addQuantity = 0;
              this.isTrue = false;
              alert("Added");
            }
            else
            {
              alert("Quantity not available");
              this.getQuantity = 0;
              this.quantity="";
              this.addQuantity = 0;
              this.isTrue = false;
            } 
          }
          else if(this.placeOrders[i].productid != this.customerOrder.productid)
            {
              this.isTrue = true;
            }
        }
        if(this.isTrue == true)
        {
          this.addDetails.push(this.customerOrder);
          this.placeOrders.push(this.customerOrder);
            this.quantity="";
            this.getQuantity = 0;
            alert("Added");
        }
            
      }
      
      else
      {
        alert("Quantity not available");
        this.getQuantity = 0;
      }
    }
    else if(parseInt(this.quantity)<0)
    {
      alert("Enter valid quantity");
    }

  }
  setProductValues(productId:any,productQuantity:any)
  {
    this.updateQuantity = productQuantity;
    this.selectedProduct = productId;
  };

  updateProduct()
  {
    if(parseInt(this.updateQuantity)>0)
    {   
      for(let i=0;i<this.stock.length;i++)
      {
        if(this.stock[i]._id == this.selectedProduct)
        {
          this.getQuantity += parseInt(this.stock[i].stockDetails.quantity);
        }
      }
      if(parseInt(this.updateQuantity) <= this.getQuantity)
      {
        for(let i=0;i<this.placeOrders.length;i++)
        {
          if(this.placeOrders[i].productid == this.selectedProduct)
          {
            
            this.placeOrders[i].productQuantity = parseInt(this.updateQuantity);
            this.addDetails[i].productQuantity = parseInt(this.updateQuantity);
            this.updateQuantity="";
            this.getQuantity = 0;
            alert("Updated Successfully");
            break;
          } 
        }
      }
      else
      {
        alert("Quantity not available");
        this.getQuantity = 0;
      }
    }
    else if(parseInt(this.quantity)<0)
    {
      alert("Enter valid quantity");
    }
  }
  deleteProduct(productId:any)
  {
    if(confirm('Are you sure to delete the record ?') == true)
    {
      this.indexOfObject = this.placeOrders.findIndex((object:any) => {
        return object.productid === productId;
      });
      this.index_Of_Object = this.addDetails.findIndex((object:any) => {
        return object.productid === productId;
      });
      for(let i=0;i<this.placeOrders.length;i++)
      {
        if(this.placeOrders[i].productid == productId)
        {
          this.placeOrders.splice(this.indexOfObject, 1);
          this.addDetails.splice(this.index_Of_Object, 1);

        }
      }
      alert("Successfully")
    }
  }
  async getStock()
  {
    this.stock = await lastValueFrom(this.customerOrderService.getStockApi(this.pharmacyId))
    this.uniqueStock = this.stock.filter((item:any, index:any, self:any) => self.indexOf(item) === index)
  
  }
  
  
  ngOnInit(): void {
    this.getUser = this.signInService.getLoginUser();
    this.pharmacyId = this.getUser[0].PharmacyId; 
    this.getStock();
    
  }

}
