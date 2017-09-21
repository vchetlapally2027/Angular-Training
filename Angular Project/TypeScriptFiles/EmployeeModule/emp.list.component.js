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
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(eLogic) {
        var _this = this;
        this.eLogic = eLogic;
        this.OnAddNew = new core_1.EventEmitter();
        // this.Employees = eLogic.GetEmployees();
        eLogic.GetEmployees().subscribe(function (r) {
            var tempEmployees = r.json();
            _this.Employees = tempEmployees.map(function (e) {
                return new Employee_1.Employee(e.FirsName + " " + e.LastName, e.Salary);
            });
        });
    }
    EmployeeListComponent.prototype.ShowAddNew = function () {
        this.OnAddNew.emit();
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], EmployeeListComponent.prototype, "OnAddNew", void 0);
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: "employee-list",
            templateUrl: "./emp.list.component.html"
        }),
        __metadata("design:paramtypes", [EmployeeService_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=emp.list.component.js.map