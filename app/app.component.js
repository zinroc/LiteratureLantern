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
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = "Literature Lanturn";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styles: ["h1 {\n\tcolor: white;\n\tbackground: darkgray;\n\tpadding: 20px;\n}\n"],
        template: "\n\t    <meta http-equiv=\"Cache-Control\" content=\"no-cache, no-store, must-revalidate\">\n\t\t<meta http-equiv=\"Pragma\" content=\"no-cache\">\n\t\t<meta http-equiv=\"Expires\" content=\"0\">\n\t\t<h1>{{name}}</h1>\n\t\t<a [routerLink]=\"['/']\">Home</a> | <a [routerLink]=\"['/about/', { id: 2 }]\">About</a>\n\t\t<router-outlet></router-outlet>\n\t",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map