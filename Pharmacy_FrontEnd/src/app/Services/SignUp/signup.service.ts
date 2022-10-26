import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
  registerUserApi(user:any){
    return this.http.post(`${environment.baseUrl}/signup`,user)

  }
  
}
