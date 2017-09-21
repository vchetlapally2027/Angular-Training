import {Employee} from "../Models/Employee"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http,Response } from "@angular/http";

@Injectable()
export class EmployeeService{
   private Employees : Array<Employee>
//     constructor() {
//         this.Employees = new Array<Employee>();
//         this.Employees.push(new Employee("Venkatesh",1000));
//         this.Employees.push(new Employee("Nihan",10000));
//         this.Employees.push(new Employee("Thanush",1000));
//     }
constructor(
        private http:Http){
    
    }
    GetEmployees():Observable<Response>{
        // return this.Employees;
        return this.http.
        get("http://trainitservice.azurewebsites.net/api/employee");
    }
    SaveEmployee(e:Employee){
        this.Employees.push(e);
    }
}

