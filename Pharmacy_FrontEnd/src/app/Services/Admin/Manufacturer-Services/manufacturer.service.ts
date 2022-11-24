import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  constructor(private http:HttpClient) { }

  getManufacturerApi(){
    return this.http.get(`${environment.baseUrl}/edit-manufacturer`)
  };
  registerManufacturerApi(manufacturer:any){
    return this.http.post(`${environment.baseUrl}/add-manufacturer`,manufacturer)
  };
  deleteManufacturerApi(id:any){
    return this.http.delete(`${environment.baseUrl}/edit-manufacturer/${id}`)
  };
  updateManufacturerApi(id:any,manufacturer:any){
    return this.http.put(`${environment.baseUrl}/edit-manufacturer/${id}`,manufacturer)
  };
}
