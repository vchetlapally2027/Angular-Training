"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("../Models/Employee");
var EmployeeLogic = /** @class */ (function () {
    function EmployeeLogic() {
        this.Employees = new Array();
        this.Employees.push(new Employee_1.Employee("Venkatesh-Dummy Logic", 1000));
        this.Employees.push(new Employee_1.Employee("Nihan-Dummy Logic", 10000));
        this.Employees.push(new Employee_1.Employee("Thanush-Dummy Logic", 1000));
    }
    EmployeeLogic.prototype.GetEmployees = function () {
        return this.Employees;
    };
    return EmployeeLogic;
}());
exports.EmployeeLogic = EmployeeLogic;
var RealEmployeeLogic = /** @class */ (function () {
    function RealEmployeeLogic() {
        this.Employees = new Array();
        this.Employees.push(new Employee_1.Employee("Venkatesh-Real Logic", 1000));
        this.Employees.push(new Employee_1.Employee("Nihan-Real Logic", 10000));
        this.Employees.push(new Employee_1.Employee("Thanush-Real Logic", 1000));
    }
    RealEmployeeLogic.prototype.GetEmployees = function () {
        return this.Employees;
    };
    return RealEmployeeLogic;
}());
exports.RealEmployeeLogic = RealEmployeeLogic;
var abcd = /** @class */ (function () {
    function abcd() {
        this.Employees = new Array();
        this.Employees.push(1);
        this.Employees.push(2);
        this.Employees.push(3);
    }
    return abcd;
}());
exports.abcd = abcd;
//# sourceMappingURL=EmployeeLogic.js.map