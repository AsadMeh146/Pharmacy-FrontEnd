import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private http:HttpClient) { }
  getloanStatusApi()
  {
    return this.http.get(`${environment.baseUrl}/get-loan-status/status-loan`);
  }
}
