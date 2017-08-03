import { RouterModule, Route } from '@angular/router';

import { EmployeesListComponent } from "app/erp/employees/employees-list/employees-list.component";
import { EmployeeDetailsComponent } from "app/erp/employees/employee-details/employee-details.component";
import { EmployeeCreateComponent } from "app/erp/employees/employee-create/employee-create.component";
import { EmployeesSectionComponent } from "app/erp/employees/employees-section/employees-section.component";
import { TestComponent } from "app/erp/employees/test/test.component";

const employeesRoutes: Route[] = [
    {
        path: '',
        component: EmployeesSectionComponent,
        children: [
            {
                path: '',
                component: EmployeesListComponent,
            },
            {
                path: 'create',
                component: EmployeeCreateComponent
            },
            {
                path: 'test',
                component: TestComponent
            },
            {
                path: ':id',
                component: EmployeeDetailsComponent
            },
            
        ]
    },

];

export const employeesRouting = RouterModule.forChild(employeesRoutes);