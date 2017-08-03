import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee;
  gridData;

  constructor(private route: ActivatedRoute,
             private empService: EmployeesService) {
              
  }

  ngOnInit() {
    let employeeId = this.route.snapshot.params['id'];

    this.empService.getEmployeeDetails(employeeId)
        .subscribe(employee => this.employee = employee);


  }

}
