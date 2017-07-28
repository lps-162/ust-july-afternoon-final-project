import { Component, OnInit } from '@angular/core';
import { listOfEmployees } from "app/shared/mock-data/mock-employees";
//import { listOfEmployees } from '../../../shared/mock-data/mock-employees';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  gridData;

  constructor() { }

  ngOnInit() {
    this.gridData = listOfEmployees;
  }

}
