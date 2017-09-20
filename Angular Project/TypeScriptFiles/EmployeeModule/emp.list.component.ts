import { Component } from "@angular/core"
import {Employee} from "../Models/Employee"
import {EmployeeService} from "../Logics/EmployeeService"

@Component({
    selector: "employee-list",
    templateUrl: "./emp.list.component.html"
})
export class EmployeeListComponent {
    Employees: Array<Employee>
    constructor(private eLogic: EmployeeService) {
        this.Employees = eLogic.GetEmployees();
    }
}
