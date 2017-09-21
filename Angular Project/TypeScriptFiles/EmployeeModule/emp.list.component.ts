import { Component,Output,EventEmitter } from "@angular/core"
import {Employee} from "../Models/Employee"
import {EmployeeService} from "../Logics/EmployeeService"
import { Http  } from "@angular/http";
@Component({
    selector: "employee-list",
    templateUrl: "./emp.list.component.html"
})
export class EmployeeListComponent {
    Employees: Array<Employee>;
    @Output()OnAddNew:EventEmitter<void>=new EventEmitter<void>();
    constructor(private eLogic: EmployeeService) {
        // this.Employees = eLogic.GetEmployees();
         eLogic.GetEmployees().subscribe((r)=>{
           let tempEmployees:Array<any> =r.json();
         this.Employees= tempEmployees.map((e)=>{
                return new Employee(e.FirsName+" "+e.LastName,e.Salary);
           });
       });
    }
    ShowAddNew():void{
        this.OnAddNew.emit();
    }
}
