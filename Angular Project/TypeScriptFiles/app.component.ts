import { Component } from "@angular/core"
import { Employee } from "./Models/Employee"
import { EmployeeLogic, RealEmployeeLogic, abcd } from "./Logics/EmployeeLogic"
import { EmployeeService } from "./Logics/EmployeeService"

@Component({
    selector: "my-custom-tag",
    //template:"<h1>Hello World.</h1> This is Angular JS"
    templateUrl: "./app.component.html",
    //Service for Dummy Logic
    // providers:[{provide:EmployeeLogic,useClass:EmployeeLogic}]
    //Service for Real Logic
    //providers:[{provide:EmployeeLogic,useClass:RealEmployeeLogic}]
    //Service for class with other type, it will throw error at run time though
    //providers:[{provide:EmployeeLogic,useClass:abcd}]
    //Service for Employee Service
    providers: [EmployeeService]
})
export class AppComponent {
    Name: string;
    Salary: number;
    Employees: Array<Employee>
    IsAddNew: boolean;
    // constructor() {
    //     this.Name="Venkatesh";
    //     this.Salary=500;
    //     this.Employees = new Array<Employee>();
    //     this.Employees.push(new Employee("Venkatesh",1000));
    //     this.Employees.push(new Employee("Nihan",10000));
    //     this.Employees.push(new Employee("Thanush",1000));
    // }
    /**
     *Injecting Service
     */
    // constructor(private eLogic:EmployeeLogic) {
    //     this.Employees = eLogic.GetEmployees();
    // }

    constructor(private eLogic: EmployeeService) {
        this.Employees = eLogic.GetEmployees();
        this.IsAddNew = false;
    }

    Increment(): void {
        this.Salary = this.Salary + 50;
    }

    SaveEmployee(): void {
        this.eLogic.SaveEmployee(new Employee("xxx", 500))
    }
    ShowAddNew() {
        this.IsAddNew = true;
    }

    HideAddNew() {
        this.IsAddNew = false;
    }
}