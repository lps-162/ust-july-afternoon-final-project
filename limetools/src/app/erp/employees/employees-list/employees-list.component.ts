import { Component, OnInit } from '@angular/core';
import { EmployeesService } from "app/shared/services/employees.service";


//import { listOfEmployees } from '../../../shared/mock-data/mock-employees';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  gridData;

  constructor(private empService: EmployeesService) { }

  ngOnInit(){
    this.empService.getEmployees()
      .subscribe(employees => {
        console.log(employees);
        this.gridData = employees;
      });
  }

}
