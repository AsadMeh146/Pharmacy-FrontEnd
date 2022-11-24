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
}
