import {Employee} from "../Models/Employee"

export class EmployeeService{
   private Employees : Array<Employee>
    constructor() {
        this.Employees = new Array<Employee>();
        this.Employees.push(new Employee("Venkatesh",1000));
        this.Employees.push(new Employee("Nihan",10000));
        this.Employees.push(new Employee("Thanush",1000));
    }
    GetEmployees():Array<Employee>{
        return this.Employees;
    }
    SaveEmployee(e:Employee){
        this.Employees.push(e);
    }
}

