import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

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
    return this.http.get(`${environment.baseUrl}/ViewPharmacyInfo`)
  }
  
  updatePharmacyApi(Id:any,pharmacy:any){
    return this.http.put(`${environment.baseUrl}/ViewPharmacyInfo/${Id}`,pharmacy)
  }

  deletePharmacyApi(Id:any){
    return this.http.delete(`${environment.baseUrl}/ViewPharmacyInfo/${Id}`)
  }
  
}
