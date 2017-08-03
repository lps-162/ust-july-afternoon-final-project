export class Employee {
    id?: number;
    emp_no: string;
    first_name: string;
    last_name: string;
    city: string;
    full_name?: string;

    constructor() {
        this.emp_no = '';
        this.first_name = '';
        this.last_name = '';
        this.city = '';
    }
}