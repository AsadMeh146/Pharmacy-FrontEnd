import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShipperService {

  constructor(private http:HttpClient) { }
  registerShipperApi(shipper:any){
    return this.http.post(`${environment.baseUrl}/add-shipper`,shipper)
  };
  getShipperApi(){
    return this.http.get(`${environment.baseUrl}/edit-shipper`)
  };
  deleteShipperApi(id:any){
    return this.http.delete(`${environment.baseUrl}/edit-shipper/${id}`)
  };
  updateShipperApi(id:any,shipper:any){
    return this.http.put(`${environment.baseUrl}/edit-shipper/${id}`,shipper)
  };
}
