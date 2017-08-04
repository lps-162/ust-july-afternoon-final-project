// import { Component, OnInit } from '@angular/core';
// import { Employee } from "app/shared/models/employee";
// import { EmployeesService } from "app/shared/services/employees.service";
// import { Router } from "@angular/router";
// import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// @Component({
//   selector: 'app-employee-create',
//   templateUrl: './employee-create.component.html',
//   styleUrls: ['./employee-create.component.css']
// })
// export class EmployeeCreateComponent implements OnInit {
//   employee;
//   successMessage: string;

//   createForm: FormGroup;
//   empNoError: string;
//   empNoErrorStyle;

//   constructor(private router: Router, 
//       private empService: EmployeesService,
//       private fb: FormBuilder) { }

//   ngOnInit() {
//     this.employee = new Employee();
//     this.buildForm();
//   }

//   private buildForm() {
//     this.createForm = this.fb.group({
//       emp_no: ['', 
//                   [
//                     Validators.required, 
//                     Validators.minLength(3),
//                     Validators.maxLength(6)
//                   ]
//               ],
//       first_name: ['', 
//                  [
//                     Validators.required, 
//                     Validators.minLength(6),
//                     Validators.maxLength(20)
//                   ]
//               ],
//       last_name: [''],
//       city: ['']
//     });

//     console.log(this.createForm);

//     this.createForm.valueChanges.subscribe((data) => {
//       this.empNoError = '';
      
//       let empNoControl = this.createForm.get('emp_no');

//       if (empNoControl.dirty && empNoControl.invalid) {
//         if (empNoControl.errors) {
//           if (empNoControl.errors['required']) this.empNoError = 'Name is required';
//           if (empNoControl.errors['minlength']) this.empNoError = 'Name should have minimum 3 characters';
//           if (empNoControl.errors['maxlength']) this.empNoError = 'Name cannot exceed 6 characters';

//           // this.empNoErrorStyle = {
//           //           'has-error': this.empNoError, 
//           //           'has-success' : !this.empNoError 
//           //       };
          
//         }
        
//       }

//     })
//   }

//   createEmployee() {
//     this.empService.createEmployee(this.employee)
//         .subscribe(employee => {
//           //this.successMessage = 'Employee Created Successfully'
//           //setTimeout(() => this.successMessage = '', 3000);
//           const link = ['/employees', employee.id];
//           this.router.navigate(link);
//         });
//   }
// }
