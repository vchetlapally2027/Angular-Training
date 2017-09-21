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
var Employee_1 = require("../Models/Employee");
var EmployeeService_1 = require("../Logics/EmployeeService");
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
    // constructor(private eLogic:EmployeeLogic) {
    //     this.Employees = eLogic.GetEmployees();
    // }
    function AppComponent(eLogic) {
        this.eLogic = eLogic;
        this.Employees = eLogic.GetEmployees();
        this.IsAddNew = false;
    }
    AppComponent.prototype.Increment = function () {
        this.Salary = this.Salary + 50;
    };
    AppComponent.prototype.SaveEmployee = function () {
        this.eLogic.SaveEmployee(new Employee_1.Employee("xxx", 500));
    };
    AppComponent.prototype.ShowAddNew = function () {
        this.IsAddNew = true;
    };
    AppComponent.prototype.HideAddNew = function () {
        this.IsAddNew = false;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-custom-tag",
            //template:"<h1>Hello World.</h1> This is Angular JS"
            templateUrl: "./app.component.html",
            //Service for Dummy Logic
            // providers:[{provide:EmployeeLogic,useClass:EmployeeLogic}]
            //Service for Real Logic
            //providers:[{provide:EmployeeLogic,useClass:RealEmployeeLogic}]
            //Service for class with other type, it will throw error at run time though
            //providers:[{provide:EmployeeLogic,useClass:abcd}]
            //Service for Employee Service
            providers: [EmployeeService_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [EmployeeService_1.EmployeeService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent = __decorate([
        core_1.Component({
            selector: 'customer',
            template: '<h1>Customer</h1>'
        })
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'product',
            template: '<h1>Product</h1>'
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=app.component.js.map