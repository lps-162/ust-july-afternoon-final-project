import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesService {
  employeesUrl = 'http://localhost:3000/api/employees';

  constructor(private http: Http) { }

  getEmployees() {
    return this.http.get(this.employeesUrl)
      .map(response => response.json());
    
  }

  getEmployeeDetails(id) {
    let detailsUrl = this.employeesUrl + '/' + id;

    return this.http.get(detailsUrl)
      .map(response => response.json());
  }

  createEmployee(employee) {
    return this.http
        .post(this.employeesUrl, employee)
        .map(response => response.json())
  }

}
