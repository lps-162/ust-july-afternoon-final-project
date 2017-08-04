import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { EmployeesService } from "app/shared/services/employees.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employee;
  errorMessage: string;

  createForm: FormGroup;
  private fb: FormBuilder;
  isFormValid: boolean;

  formErrors = {
      emp_no: '',
      first_name: '',
      last_name: '',
      city: ''
    };

    validationMessages = {
      emp_no: {
        'required': 'Emp No is required',
        'minlength': 'Emp No should be of 3 characters',
        'maxlength': 'Emp No should not exceed 6 characters'
      },
      first_name: {
        'required': 'First name is required',
        'minlength': 'First name should be of 6 characters',
        'maxlength': 'First name should not exceed 20 characters'
      },
      last_name: {
        'required': 'Last name is required',
        'minlength': 'Last name should be atleast 3 characters',
        'maxlength': 'Last name should not exceed 6 characters'
      },
      city: {
          'required': 'City name is required'
      }
    };

  constructor(private router: Router, 
              private empService: EmployeesService,
              fb: FormBuilder) { 
          this.fb = fb;
          this.isFormValid = false;
      }

  ngOnInit() {
    this.employee = new Employee();
    this.buildForm();
  }

  private buildForm() {
    this.createForm = this.fb.group({
      emp_no: ['', 
                  [
                    Validators.required, 
                    Validators.minLength(3),
                    Validators.maxLength(6)
                  ]
              ],
      first_name: ['', 
                 [
                    Validators.required, 
                    Validators.minLength(6),
                    Validators.maxLength(20)
                  ]
              ],
      last_name: ['', 
                [
                    Validators.required, 
                    Validators.minLength(3),
                    Validators.maxLength(6)
                ]
        ],
      city: ['', Validators.required]
    });

    console.log(this.createForm);

    this.createForm.valueChanges.subscribe((data) => {
        
        for (let field in this.formErrors) {
            this.formErrors[field] = '';
            let input = this.createForm.get(field);

            if (input.invalid && input.dirty) {
                for (let err in input.errors) {
                    this.formErrors[field] = this.validationMessages[field][err];
                }
            }
        }

        this.isFormValid = this.createForm.valid;
    });
  }

  createEmployee() {
    this.employee = this.createForm.value;
    
    this.empService.createEmployee(this.employee)
        .subscribe(employee => {
          //this.successMessage = 'Employee Created Successfully'
          //setTimeout(() => this.successMessage = '', 3000);
          const link = ['/employees', employee.id];
          this.router.navigate(link);
        },
        errorMessage => {
            this.errorMessage = errorMessage;
        });
  }
}
