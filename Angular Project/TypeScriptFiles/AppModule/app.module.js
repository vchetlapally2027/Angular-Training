"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var platform_browser_1 = require("@angular/platform-browser");
//Required when we use components instead of Module
// import {EmployeeComponent} from "../EmployeeModule/emp.component"
// import {EmployeeAddComponent} from "../EmployeeModule/emp.add.component"
// import {EmployeeListComponent} from "../EmployeeModule/emp.list.component"
var emp_Module_1 = require("../EmployeeModule/emp.Module");
var router_1 = require("@angular/router");
var emp_component_1 = require("../EmployeeModule/emp.component");
var c = [
    { path: 'Customer', component: app_component_1.CustomerComponent },
    { path: 'Product', component: app_component_1.ProductComponent },
    { path: 'Employee', component: emp_component_1.EmployeeComponent }
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, emp_Module_1.EmployeeModule,
                router_1.RouterModule.forRoot(c, { useHash: true })],
            declarations: [app_component_1.AppComponent, app_component_1.CustomerComponent, app_component_1.ProductComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map