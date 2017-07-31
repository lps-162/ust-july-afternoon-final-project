import { RouterModule, Route } from '@angular/router';

import { HomeComponent } from "app/erp/home/home.component";
import { AboutComponent } from "app/erp/about/about.component";
import { EmployeesListComponent } from "app/erp/employees/employees-list/employees-list.component";
import { NotFoundComponent } from "app/erp/not-found/not-found.component";
import { EmployeeDetailsComponent } from "app/erp/employees/employee-details/employee-details.component";
import { EmployeeCreateComponent } from "app/erp/employees/employee-create/employee-create.component";
import { EmployeesSectionComponent } from "app/erp/employees/employees-section/employees-section.component";

import { aboutRoutes } from 'app/about.routing';
import { miscRoutes } from "app/misc.routing";

const appRoutes: Route[] = [
    
    // {
    //     path: 'about',
    //     component: AboutComponent
    // },
    ...aboutRoutes,
    ...miscRoutes

];

export const appRouting = RouterModule.forRoot(appRoutes);