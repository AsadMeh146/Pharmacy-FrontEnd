import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  AddEmployeeApi(employee:any){
    let formData = new FormData()
    formData.append('Name',employee.Name)
    formData.append('PIN',employee.PIN)
    formData.append('CNIC',employee.CNIC)
    formData.append('Gender',employee.Gender)
    formData.append('Salary',employee.Salary)
    formData.append('Designation',employee.Designation)
    formData.append('DateOfBirth',employee.DateOfBirth)
    formData.append('Address',employee.Address)
    formData.append('PharmacyId',employee.PharmacyId)
    formData.append('Status',employee.Status)
    formData.append('image',employee.Image,employee.Image.filename)
    formData.append('HireDate',employee.HireDate)
    formData.append('Email',employee.Email)
    formData.append('ContactNumber',employee.ContactNumber)
     console.log(environment.baseUrl)
     console.log(environment.baseUrl + '/admin');
     console.log(formData)
    this.http.post(environment.baseUrl + '/admin',formData).subscribe({next: (res:any) =>{
      console.log(res)
    }});
    return 0;
    // console.log("")
    //  return this.http.post(`${environment.baseUrl}/admin`,employee)
   
  }
  get_designationApi(){
    console.log("")
     return this.http.get(`${environment.baseUrl}/get-designation/admin-designation`)
   
  }
  get_statusApi(){
    console.log("")
     return this.http.get(`${environment.baseUrl}/get-status/admin-status`)
   
  }
  getEmployeeApi()
  {
    
    return this.http.get(environment.baseUrl + '/view-employee')
    // return this.http.get(`${environment.baseUrl}/ViewPharmacyInfo`)
    //return this.http.get(`${environment.baseUrl}/view-admin`)
  }
 
  deleteEmployeeApi(Id:any){
    console.log("deleted!!!")
    return this.http.delete(`${environment.baseUrl}/view-employee/${Id}`)
   
  }
  
  updateEmployeeApi(Id:any,employee:any){
    return this.http.put(`${environment.baseUrl}/view-admin/${Id}`,employee)
  }
  // getPharmacyApi(){
  //   console.log("")
  //    return this.http.get(`${environment.baseUrl}/get-status/admin-status`)
   
  // }
}
