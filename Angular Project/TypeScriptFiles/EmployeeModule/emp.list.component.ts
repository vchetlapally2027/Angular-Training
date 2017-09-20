import { Component,Output,EventEmitter } from "@angular/core"
import {Employee} from "../Models/Employee"
import {EmployeeService} from "../Logics/EmployeeService"

@Component({
    selector: "employee-list",
    templateUrl: "./emp.list.component.html"
})
export class EmployeeListComponent {
    Employees: Array<Employee>;
    @Output()OnAddNew:EventEmitter<void>=new EventEmitter<void>();
    constructor(private eLogic: EmployeeService) {
        this.Employees = eLogic.GetEmployees();
    }
    ShowAddNew():void{
        this.OnAddNew.emit();
    }
}
