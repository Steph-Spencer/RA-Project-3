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
/**
 * Created by anerdatlarge on 2017-02-17.
 */
var core_1 = require('@angular/core');
var journal_service_1 = require('./journal.service');
var newblog_1 = require('./newblog');
var NewblogComponent = (function () {
    function NewblogComponent(journalService) {
        this.journalService = journalService;
    }
    NewblogComponent.prototype.ngOnInit = function () {
        this.entry = new newblog_1.JournalEntry();
    };
    NewblogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'newblog',
            templateUrl: './newblog.component.html',
            styleUrls: ['./newblog.component.css']
        }), 
        __metadata('design:paramtypes', [journal_service_1.JournalService])
    ], NewblogComponent);
    return NewblogComponent;
}());
exports.NewblogComponent = NewblogComponent;
//# sourceMappingURL=newblog.component.js.map