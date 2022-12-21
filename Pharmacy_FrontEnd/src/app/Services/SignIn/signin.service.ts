import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  loginUser:any
  constructor(private http:HttpClient) { }
  findUserLogin(credentials:any)
  {
    return this.http.get(`${environment.baseUrl}/signin/${credentials.email}/${credentials.password}`);
  }
  setLoginUser(user:any)
  {
    this.loginUser = user;
  }
  getLoginUser()
  {
    return this.loginUser;
  }
}
