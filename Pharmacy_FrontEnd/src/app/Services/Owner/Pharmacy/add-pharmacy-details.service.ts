import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddPharmacyDetailsService {

  
  constructor(private http:HttpClient) { }

  addPharmacyApi(pharmacy:any){
     return this.http.post(`${environment.baseUrl}/add-pharmacy`,pharmacy) 
  }
  
  getPharmacyApi()
  {
    return this.http.get(`${environment.baseUrl}/view-pharmacy`)
  }
  
  updatePharmacyApi(Id:any,pharmacy:any){
    return this.http.put(`${environment.baseUrl}/view-pharmacy/${Id}`,pharmacy)
  }

  deletePharmacyApi(Id:any){
    return this.http.delete(`${environment.baseUrl}/view-pharmacy/${Id}`)
  }
  
}
