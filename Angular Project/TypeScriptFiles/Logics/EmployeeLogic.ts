import {Employee} from "../Models/Employee"

export class EmployeeLogic{
   private Employees : Array<Employee>
    constructor() {
        this.Employees = new Array<Employee>();
        this.Employees.push(new Employee("Venkatesh-Dummy Logic",1000));
        this.Employees.push(new Employee("Nihan-Dummy Logic",10000));
        this.Employees.push(new Employee("Thanush-Dummy Logic",1000));
    }
    GetEmployees():Array<Employee>{
        return this.Employees;
    }
}


export class RealEmployeeLogic{
   private Employees : Array<Employee>
    constructor() {
        this.Employees = new Array<Employee>();
        this.Employees.push(new Employee("Venkatesh-Real Logic",1000));
        this.Employees.push(new Employee("Nihan-Real Logic",10000));
        this.Employees.push(new Employee("Thanush-Real Logic",1000));
    }
    GetEmployees():Array<Employee>{
        return this.Employees;
    }
}

export class abcd{
   private Employees : Array<number>
    constructor() {
        this.Employees = new Array<number>();
        this.Employees.push(new Employee(1);
        this.Employees.push(2);
        this.Employees.push(3);
    }
}