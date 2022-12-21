import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {

  constructor(private http:HttpClient) { }
  getStockApi(pharmacyId:any){
    return this.http.get(`${environment.baseUrl}/customer-order/${pharmacyId}`) 
  };
  addCustomerOrder(customer:any)
  {
    return this.http.post(`${environment.baseUrl}/customer-order`,customer)
  }
  addCustomerOrderDetails(customerDetail:any)
  {
    return this.http.post(`${environment.baseUrl}/customer-order/order-details`,customerDetail)
  }
}

