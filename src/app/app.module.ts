import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  //done manually to let angular app know about service
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
