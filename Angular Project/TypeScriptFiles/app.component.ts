import {Component} from "@angular/core"
import {Employee} from "./Models/Employee"
import {EmployeeLogic,RealEmployeeLogic,abcd} from "./Logics/EmployeeLogic"

@Component({
    selector:"my-custom-tag",
    //template:"<h1>Hello World.</h1> This is Angular JS"
    templateUrl:"./app.component.html",
    //Service for Dummy Logic
    // providers:[{provide:EmployeeLogic,useClass:EmployeeLogic}]
    //Service for Real Logic
    providers:[{provide:EmployeeLogic,useClass:RealEmployeeLogic}]
    //Service for class with other type, it will throw error at run time though
    //providers:[{provide:EmployeeLogic,useClass:abcd}]
})
export class AppComponent{
    Name:string;
    Salary:number;
    Employees : Array<Employee>
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
    constructor(private eLogic:EmployeeLogic) {
        this.Employees = eLogic.GetEmployees();
    }
    Increment():void{
        this.Salary = this.Salary + 50;
    }
}