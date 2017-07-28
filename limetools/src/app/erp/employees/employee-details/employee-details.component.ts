import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.employeeId = this.route.snapshot.params['id'];
  }

}
