"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ConcatPipe = /** @class */ (function () {
    function ConcatPipe() {
    }
    ConcatPipe.prototype.transform = function (v) {
        var a = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            a[_i - 1] = arguments[_i];
        }
        return v + " From Pipe";
    };
    ConcatPipe = __decorate([
        core_1.Pipe({
            name: 'concat'
        })
    ], ConcatPipe);
    return ConcatPipe;
}());
exports.ConcatPipe = ConcatPipe;
//# sourceMappingURL=concat.pipe.js.map