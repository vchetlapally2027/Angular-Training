import {NgModule} from "@angular/core"
import {AppComponent} from "./app.component"
import {BrowserModule} from "@angular/platform-browser"
//Required when we use components instead of Module
// import {EmployeeComponent} from "../EmployeeModule/emp.component"
// import {EmployeeAddComponent} from "../EmployeeModule/emp.add.component"
// import {EmployeeListComponent} from "../EmployeeModule/emp.list.component"
import {EmployeeModule} from "../EmployeeModule/emp.Module"


@NgModule({
    //Required when we use components instead of Module
    // imports:[BrowserModule],
    imports:[BrowserModule,EmployeeModule],
    declarations:[AppComponent],
    //Required when we use components instead of Module
    // declarations:[AppComponent,EmployeeComponent,EmployeeAddComponent,EmployeeListComponent],
    bootstrap:[AppComponent]
})
export class AppModule{
    
}