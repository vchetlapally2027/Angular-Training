import {NgModule} from "@angular/core"
import {AppComponent,CustomerComponent,ProductComponent} from "./app.component"
import {BrowserModule} from "@angular/platform-browser"
//Required when we use components instead of Module
// import {EmployeeComponent} from "../EmployeeModule/emp.component"
// import {EmployeeAddComponent} from "../EmployeeModule/emp.add.component"
// import {EmployeeListComponent} from "../EmployeeModule/emp.list.component"
import {EmployeeModule} from "../EmployeeModule/emp.Module"
import { Routes,RouterModule } from "@angular/router";
import { EmployeeComponent } from "../EmployeeModule/emp.component";

const c:Routes =[
    {path:'Customer',component:CustomerComponent},
    {path:'Product',component:ProductComponent},
    {path:'Employee',component:EmployeeComponent}
];



// @NgModule({
//     //Required when we use components instead of Module
//     // imports:[BrowserModule],
//     imports:[BrowserModule,EmployeeModule],
//     RouterModule.forRoot(c,{useHash:true})],
//     declarations:[AppComponent,CustomerComponent,ProductComponent],
//     //Required when we use components instead of Module
//     // declarations:[AppComponent,EmployeeComponent,EmployeeAddComponent,EmployeeListComponent],
//     bootstrap:[AppComponent]
// })
// export class AppModule{
    
// }

@NgModule({
    imports:[BrowserModule,EmployeeModule,
    RouterModule.forRoot(c,{useHash:true})],
    declarations:[AppComponent,CustomerComponent,ProductComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}