import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }
  registerStockApi(stock:any){
    return this.http.post(`${environment.baseUrl}/add-product`,stock)
  };
  getProductApi()
  {
    return this.http.get(`${environment.baseUrl}/get-product`)
  };
  deleteProductApi(id:any)
  {
    return this.http.delete(`${environment.baseUrl}/edit-product/${id}`)
  };
  updateProductApi(id:any,product:any){
    return this.http.put(`${environment.baseUrl}/edit-product/${id}`,product)
  };
}
