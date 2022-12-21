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
  getProductApi(pharmacyId:any)
  {
    return this.http.get(`${environment.baseUrl}/get-product/${pharmacyId}`)
  };
  deleteProductApi(id:any)
  {
    return this.http.delete(`${environment.baseUrl}/edit-product/${id}`)
  };
  updateProductApi(id:any,product:any){
    return this.http.put(`${environment.baseUrl}/edit-product/${id}`,product)
  };
  orderStockApi(stock:any)
  {
    return this.http.post(`${environment.baseUrl}/order-stock/ordered`,stock)
  };
  getOrderStockApi(orderId:any)
  {
    return this.http.get(`${environment.baseUrl}/receive-stock/show/${orderId}`)
  };
  orderStockDetailsApi(orderProduct:any)
  {
    return this.http.post(`${environment.baseUrl}/order-stock/stockorder-details`,orderProduct)
  };
  updateStockOrder(orderId:any,stockOrder:any)
  {
    return this.http.put(`${environment.baseUrl}/order-stock/update/${orderId}`,stockOrder)
  };
  addStockDetails(productDetails:any)
  {
    return this.http.post(`${environment.baseUrl}/order-stock/order-details`,productDetails)
  };
  updateStockDetails(stockDetails:any,stockId:any)
  {
    return this.http.put(`${environment.baseUrl}/order-stock/update-quantity/${stockId}`,stockDetails)
  };
  deleteStockDetail(stockId:any)
  {
    return this.http.delete(`${environment.baseUrl}/edit-product/stock-detail/${stockId}`)
  }
}

