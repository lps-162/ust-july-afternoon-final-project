import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';

import { EmployeesListComponent } from "app/erp/employees/employees-list/employees-list.component";
import { EmployeeDetailsComponent } from "app/erp/employees/employee-details/employee-details.component";
import { EmployeeCreateComponent } from "app/erp/employees/employee-create/employee-create.component";
import { EmployeesSectionComponent } from "app/erp/employees/employees-section/employees-section.component";
import { employeesRouting } from "app/erp/employees/employees.routing";
import { EmployeesService } from "app/shared/services/employees.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    employeesRouting
  ],
  declarations: [
    EmployeesListComponent,
    EmployeeDetailsComponent,
    EmployeeCreateComponent,
    EmployeesSectionComponent
  ],
  providers: [
    
  ]
})
export class EmployeesModule { }
