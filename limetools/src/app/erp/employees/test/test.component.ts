import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  employee;

  constructor(private http: Http) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/api/employees/1')
      .subscribe(response => this.handleResponse(response));
  }

  handleResponse(response) {
    this.employee = response.json();
  }

}
