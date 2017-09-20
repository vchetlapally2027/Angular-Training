"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("../Models/Employee");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        this.Employees = new Array();
        this.Employees.push(new Employee_1.Employee("Venkatesh-Dummy Logic", 1000));
        this.Employees.push(new Employee_1.Employee("Nihan-Dummy Logic", 10000));
        this.Employees.push(new Employee_1.Employee("Thanush-Dummy Logic", 1000));
    }
    EmployeeService.prototype.GetEmployees = function () {
        return this.Employees;
    };
    EmployeeService.prototype.SaveEmployee = function (e) {
        this.Employees.push(e);
    };
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=EmployeeService.js.map