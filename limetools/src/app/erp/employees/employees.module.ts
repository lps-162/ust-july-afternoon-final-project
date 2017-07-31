import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from "app/erp/employees/employees-list/employees-list.component";
import { EmployeeDetailsComponent } from "app/erp/employees/employee-details/employee-details.component";
import { EmployeeCreateComponent } from "app/erp/employees/employee-create/employee-create.component";
import { EmployeesSectionComponent } from "app/erp/employees/employees-section/employees-section.component";
import { RouterModule } from "@angular/router";
import { employeesRouting } from "app/erp/employees/employees.routing";

@NgModule({
  imports: [
    CommonModule,
    employeesRouting
  ],
  declarations: [
    EmployeesListComponent,
    EmployeeDetailsComponent,
    EmployeeCreateComponent,
    EmployeesSectionComponent
  ]
})
export class EmployeesModule { }
