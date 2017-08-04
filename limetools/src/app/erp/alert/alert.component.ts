import { Component, OnInit } from '@angular/core';
import { AlertService } from "app/shared/services/alert.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alertMessage;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlertMessage()
      .subscribe(alertMessage => {
        this.alertMessage = alertMessage;
        setTimeout(() => this.alertMessage = '', 3000);
      });
  }

}
