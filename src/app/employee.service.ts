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
  public getEmployee(): Observable<Employee> {
    //common js technique to put variables and strings at same time
    return this.http.get<any>(`${this.apiServerUrl}/employee/all` ) //<-- get requrest
    }
  public addEmployee(employee: Employee): Observable<Employee> {
    //common js technique to put variables and strings at same time
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee); //<-- post request needed for adding
    }
    public updateEmployee(employee: Employee): Observable<Employee> {
      //common js technique to put variables and strings at same time
      return this.http.put<Employee>(`${this.apiServerUrl}/employee/add`, employee); //<-- post request needed for adding
      }
      //deleting empl will not send any response back, and thus use observable<void>
    public deleteEmployee(employeeId: number): Observable<void> {
      //common js technique to put variables and strings at same time
      return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`); //<-- post request needed for adding
    }
  }
  