//create functions that can reach backend by making http requests using httpclient

import { Injectable } from '@angular/core';
import { ClientHttp2Session } from 'http2';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
//gets url
  private apiServerUrl = ''; 
  //this allows requests to backend
  constructor(private http: HttpClient) {}
//gets list of all employees
//tells http client where to make the requests and type of requests
  public getEmployees(): Observable<Employee> {
    //common js technique to put variables and strings at same time
    return this.http.get<any>(`${this.apiServerUrl}/employee/all` ) //<-- get requrest
    }
  public addEmployees(employee: Employee): Observable<Employee> {
    //common js technique to put variables and strings at same time
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee); //<-- post request needed for adding
    }
  }

