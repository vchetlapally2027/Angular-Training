import { Component,Output,EventEmitter } from "@angular/core"
import {Employee} from "../Models/Employee"
import {EmployeeService} from "../Logics/EmployeeService"

@Component({
    selector: "employee-add",
    templateUrl: "./emp.add.component.html"
    // providers: [EmployeeService]
})
export class EmployeeAddComponent {
    @Output() OnSave:EventEmitter<void>=new EventEmitter<void>();
    @Output() OnCancel:EventEmitter<void>=new EventEmitter<void>();
    constructor(private eLogic: EmployeeService) {
    }

emp:Employee=new Employee("",0);
   SaveEmployee():void{
        this.eLogic.SaveEmployee
        (this.emp);
        // (new Employee("XXX",500));
        this.OnSave.emit();
    }
    HideAddNew():void{
        this.OnCancel.emit();
    }
}