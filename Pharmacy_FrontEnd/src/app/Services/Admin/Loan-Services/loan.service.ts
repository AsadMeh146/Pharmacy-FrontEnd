import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http:HttpClient) { }
  AddLoanApi(loan:any){
    console.log("")
     return this.http.post(`${environment.baseUrl}/add-loan`,loan)
   
  }
  getLoanDataApi()
  {
    return this.http.get(`${environment.baseUrl}/view-loanapp`)
  }
  updateLoanData(id:any,row:any){
    return this.http.put(`${environment.baseUrl}/view-loanapp/${id}`,row)
  };
  get_loanstatusApi(){
    console.log("")
     return this.http.get(`${environment.baseUrl}/get-loanstatus/status-loan`)
   
  }
 

}
