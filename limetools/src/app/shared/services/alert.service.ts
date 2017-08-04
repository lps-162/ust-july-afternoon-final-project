import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Employee } from "app/shared/models/employee";

@Injectable()
export class AlertService {
  alertSource = new Subject<string>();

  constructor() { }

  sendAlert(message: string) {
    this.alertSource.next(message);
  }

  getAlertMessage() {
    return this.alertSource.asObservable();
  }

}
