import { Component } from "@angular/core"
import {Employee} from "../Models/Employee"
import {EmployeeService} from "../Logics/EmployeeService"

@Component({
    selector: "employee-add",
    templateUrl: "./emp.add.component.html"
    // providers: [EmployeeService]
})
export class EmployeeAddComponent {
    constructor(private eLogic: EmployeeService) {
    }

    SaveEmployee(): void {
        this.eLogic.SaveEmployee(new Employee("xxx", 500))
    }
}