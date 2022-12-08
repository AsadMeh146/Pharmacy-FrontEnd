import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  AddEmployeeApi(employee:any){
    console.log("")
     return this.http.post(`${environment.baseUrl}/admin`,employee)
   
  }
  get_designationApi(){
    console.log("")
     return this.http.get(`${environment.baseUrl}/get-designation/admin-designation`)
   
  }
  get_statusApi(){
    console.log("")
     return this.http.get(`${environment.baseUrl}/get-status/admin-status`)
   
  }
  // getPharmacyApi(){
  //   console.log("")
  //    return this.http.get(`${environment.baseUrl}/get-status/admin-status`)
   
  // }
}
