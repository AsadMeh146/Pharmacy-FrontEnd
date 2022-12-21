import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  AddAdminApi(admin:any){
    let formData = new FormData()
    formData.append('Name',admin.Name)
    formData.append('PIN',admin.PIN)
    formData.append('CNIC',admin.CNIC)
    formData.append('Gender',admin.Gender)
    formData.append('Salary',admin.Salary)
    formData.append('Designation',admin.Designation)
    formData.append('DateOfBirth',admin.DateOfBirth)
    formData.append('Address',admin.Address)
    formData.append('PharmacyId',admin.PharmacyId)
     formData.append('Status',admin.Status)
    formData.append('image',admin.Image,admin.Image.filename)
    formData.append('HireDate',admin.HireDate)
    formData.append('Email',admin.Email)
    formData.append('ContactNumber',admin.ContactNumber)
     console.log(environment.baseUrl)
     console.log(environment.baseUrl + '/admin');
     console.log(formData)
    this.http.post(`${environment.baseUrl}/add-admin`,formData).subscribe({next: (res:any) =>{
      console.log(res)
    }});
    return 0;
    // console.log("")
    //  return this.http.post(`${environment.baseUrl}/admin`,admin)
   
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
    // return this.http.get(`${environment.baseUrl}/ViewPharmacyInfo`)
    //return this.http.get(`${environment.baseUrl}/view-admin`)
  }
  deleteAdminApi(Id:any){
    console.log("deleted!!!")
    return this.http.delete(`${environment.baseUrl}/view-admin/${Id}`)
   
  }

  updateAdminApi(Id:any,admin:any){
    return this.http.put(`${environment.baseUrl}/view-admin/${Id}`,admin)
  }
  // getPharmacyApi(){
  //   console.log("")
  //    return this.http.get(`${environment.baseUrl}/get-status/admin-status`)
   
  // }

}
