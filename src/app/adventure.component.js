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
///<reference path="../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
/**
 * Created by anerdatlarge on 2017-02-17.
 */
var core_1 = require('@angular/core');
var AdventureComponent = (function () {
    function AdventureComponent() {
    }
    AdventureComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'adventure',
            templateUrl: './adventure.component.html',
            styleUrls: ['./adventure.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AdventureComponent);
    return AdventureComponent;
}());
exports.AdventureComponent = AdventureComponent;
//# sourceMappingURL=adventure.component.js.map