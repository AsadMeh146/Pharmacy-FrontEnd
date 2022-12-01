import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  AddAdminApi(admin:any){
    console.log("")
     return this.http.post(`${environment.baseUrl}/admin`,admin)
   
  }
  get_designationApi(){
    console.log("")
     return this.http.get(`${environment.baseUrl}/get-designation/admin-designation`)
   
  }
  get_statusApi(){
    console.log("")
     return this.http.get(`${environment.baseUrl}/get-status/admin-status`)
   
  }

  getAdminApi()
  {
    return this.http.get(`${environment.baseUrl}/view-admin`)
  }
  // getPharmacyApi(){
  //   console.log("")
  //    return this.http.get(`${environment.baseUrl}/get-status/admin-status`)
   
  // }

}
