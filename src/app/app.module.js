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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var app_content_component_1 = require('./app-content.component');
var nav_component_1 = require('./nav.component');
var banner_component_1 = require('./banner.component');
var footer_component_1 = require('./footer.component');
var shop_component_1 = require('./shop.component');
var journal_component_1 = require('./journal.component');
var journal_service_1 = require('./journal.service');
var adventure_component_1 = require('./adventure.component');
var newblog_component_1 = require('./newblog.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule,
                app_routing_module_1.AppRoutingModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                app_content_component_1.AppContentComponent,
                nav_component_1.NavComponent,
                banner_component_1.BannerComponent,
                footer_component_1.FooterComponent,
                shop_component_1.ShopComponent,
                journal_component_1.JournalComponent,
                adventure_component_1.AdventureComponent,
                newblog_component_1.NewblogComponent,
            ],
            providers: [journal_service_1.JournalService],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map