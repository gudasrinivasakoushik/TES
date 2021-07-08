import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:string = 'assets/employee.json';
  constructor(private httpClient:HttpClient) { }
  getEmpInfo(){
     return this.httpClient.get(this.url)
}
}
