import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";
import { Employee } from "app/shared/models/employee";


@Injectable()
export class EmployeesService {
  employeesUrl = 'http://localhost:3000/api/employees';

  constructor(private http: Http) { }

  getEmployees() {
    return this.http.get(this.employeesUrl)
      .map(response => response.json())
      .map(employees => this.formatAllEmployees(employees))
      .catch(this.handleErrors);
      
  }

  private formatAllEmployees(employees) {
    let convertedList = employees.map(this.formatEmployee);
    return convertedList;
  }

  private handleErrors(errResponse) {
    const errorMessage = errResponse.json().error.message;

    return Observable.throw('Internal Server Error : ' + errorMessage);
  }

  private formatEmployee(data) {
    let employee = new Employee();
    
    employee.id = data.id;
    employee.emp_no = data.emp_no;
    employee.first_name = data.first_name;
    employee.last_name = data.last_name;
    employee.city = data.city;

    employee.full_name = employee.first_name + ' ' + employee.last_name;
    
    return employee;
  }

  getEmployeeDetails(id) {
    let detailsUrl = this.employeesUrl + '/' + id;

    return this.http.get(detailsUrl)
      .map(response => response.json())
      .map(data => this.formatEmployee(data))
      .catch(this.handleErrors);
  }

  createEmployee(employee) {
    return this.http
        .post(this.employeesUrl, employee)
        .map(response => response.json())
        .catch(this.handleErrors);
  }

}
