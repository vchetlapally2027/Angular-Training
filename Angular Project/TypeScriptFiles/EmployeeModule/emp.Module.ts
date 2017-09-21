import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {EmployeeComponent} from "../EmployeeModule/emp.component"
import {EmployeeAddComponent} from "../EmployeeModule/emp.add.component"
import {EmployeeListComponent} from "../EmployeeModule/emp.list.component"
import {CommonModule} from "@angular/common"
import {EmployeeService} from "../Logics/EmployeeService"
import {ConcatPipe} from "../Pipes/concat.pipe"
import {FormsModule  } from "@angular/forms";

@NgModule({
    imports:[CommonModule,FormsModule],
    declarations:[ConcatPipe,EmployeeComponent,EmployeeAddComponent,EmployeeListComponent],
    exports:[EmployeeComponent],
    providers: [EmployeeService]
})
export class EmployeeModule{
    
}