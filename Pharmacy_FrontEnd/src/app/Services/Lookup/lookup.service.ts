import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private http:HttpClient) { }
  getProductCategoryApi()
  {
    return this.http.get(`${environment.baseUrl}/get-product-category`);
  }
  registerCategoryApi(user:any)
  {
    return this.http.post(`${environment.baseUrl}/add-category`,user)
  }
}
