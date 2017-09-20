"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeLogic_1 = require("./Logics/EmployeeLogic");
var AppComponent = /** @class */ (function () {
    // constructor() {
    //     this.Name="Venkatesh";
    //     this.Salary=500;
    //     this.Employees = new Array<Employee>();
    //     this.Employees.push(new Employee("Venkatesh",1000));
    //     this.Employees.push(new Employee("Nihan",10000));
    //     this.Employees.push(new Employee("Thanush",1000));
    // }
    /**
     *Injecting Service
     */
    function AppComponent(eLogic) {
        this.eLogic = eLogic;
        this.Employees = eLogic.GetEmployees();
    }
    AppComponent.prototype.Increment = function () {
        this.Salary = this.Salary + 50;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-custom-tag",
            //template:"<h1>Hello World.</h1> This is Angular JS"
            templateUrl: "./app.component.html",
            //Service for Dummy Logic
            // providers:[{provide:EmployeeLogic,useClass:EmployeeLogic}]
            //Service for Real Logic
            providers: [{ provide: EmployeeLogic_1.EmployeeLogic, useClass: EmployeeLogic_1.RealEmployeeLogic }]
            //Service for class with other type, it will throw error at run time though
            //providers:[{provide:EmployeeLogic,useClass:abcd}]
        }),
        __metadata("design:paramtypes", [EmployeeLogic_1.EmployeeLogic])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map