import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {

  constructor(private http:HttpClient) { }
  addCustomerApi(customer:any){
    return this.http.post(`${environment.baseUrl}/addcustomer`,customer) 
  }
}

