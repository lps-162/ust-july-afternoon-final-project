import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesService {

  constructor(private http: Http) { }

  getEmployees() {
    return this.http.get('http://localhost:3000/api/employees')
      .map(response => response.json());
    
  }

}
