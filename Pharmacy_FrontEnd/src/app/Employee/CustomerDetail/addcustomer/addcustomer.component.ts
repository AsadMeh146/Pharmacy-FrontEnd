import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { CustomerDetailsService } from 'src/app/Services/Employee/CustomerDetails/customer-details.service';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  constructor(public AddCustomerService:CustomerDetailsService,private router:Router) { }
  customer:any
  result:any
  // public Id=""
  public Name=""
  public  ContactNumber=""
  async handleSubmit(){
    this.customer={

      Name:this.Name,
      ContactNumber:this.ContactNumber,
     
    }
    this.result= await lastValueFrom(this.AddCustomerService.addCustomerApi(this.customer))
    if(this.result){
      alert("Customer Added successfully")
      // this.router.navigate([''])
    }
    else{
      alert("Ooops Error")
    }
  }
  ngOnInit(): void {
  }

}
