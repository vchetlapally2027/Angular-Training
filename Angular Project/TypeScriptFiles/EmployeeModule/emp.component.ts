import { Component } from "@angular/core"

@Component({
    selector: "employee",
    templateUrl: "./emp.component.html"
})
export class EmployeeComponent {
    IsAddNew:boolean;
    constructor(){
        this.IsAddNew=false;
    }
    ShowAddNew():void{
        this.IsAddNew=true;
    }
    HideAddNew():void{
        this.IsAddNew=false;
    }
}