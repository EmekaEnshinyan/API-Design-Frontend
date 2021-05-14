import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees: Employee[];

  constructor(private employeeService: EmployeeService){}

  ngOnInit(){
    this.getEmployee();
  }
  public getEmployee(): void{
    //subscribed used so we are notified when data comes back from server
    this.employeeService.getEmployee().subscribe(
      (response: Employee[]) => {
        this.employees = response;
   },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }
}