import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";


@Injectable()
export class EmployeesService {
  employeesUrl = 'http://localhost:3000/api/employees';

  constructor(private http: Http) { }

  getEmployees() {
    return this.http.get(this.employeesUrl)
      .map(response => response.json())
      .catch(this.handleErrors);
      
  }

  private handleErrors(errResponse) {
    const errorMessage = errResponse.json().error.message;

    return Observable.throw('Internal Server Error : ' + errorMessage);
  }

  // private formatEmployee(data) {
  //   let employee = new Employee();
  //   employee.firstName = data.first_name;
  //   employee.fullName = employee.firstName + employee.lastName;
  // }

  getEmployeeDetails(id) {
    let detailsUrl = this.employeesUrl + '/' + id;

    return this.http.get(detailsUrl)
      .map(response => response.json())
      .catch(this.handleErrors);
  }

  createEmployee(employee) {
    return this.http
        .post(this.employeesUrl, employee)
        .map(response => response.json())
        .catch(this.handleErrors);
  }

}
