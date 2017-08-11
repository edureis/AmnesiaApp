webpackJsonp([1],{

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuadroDetalheComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuadroDetalheComponent = (function () {
    function QuadroDetalheComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QuadroDetalheComponent.prototype.ngOnInit = function () {
        this.quadro = this.navParams.get('quadro');
    };
    return QuadroDetalheComponent;
}());
QuadroDetalheComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        name: "quadro/show",
        segment: "quadro/:id"
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detalhe-quadros',template:/*ion-inline-start:"/home/eduardoreis/AmnesiaApp/src/pages/quadro-detalhe/quadro-detalhe.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle icon-only>\n            <ion-icon name="menu"></ion-icon>\n        </button>        \n        <ion-title *ngIf="quadro">{{quadro.titulo}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid fixed>\n        <span>{{quadro.titulo}}</span>\n        <span>{{quadro.descricao}}</span>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/eduardoreis/AmnesiaApp/src/pages/quadro-detalhe/quadro-detalhe.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
], QuadroDetalheComponent);

var _a, _b;
//# sourceMappingURL=quadro-detalhe.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuadroDetalheComponentModule", function() { return QuadroDetalheComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quadro_detalhe__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuadroDetalheComponentModule = (function () {
    function QuadroDetalheComponentModule() {
    }
    return QuadroDetalheComponentModule;
}());
QuadroDetalheComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__quadro_detalhe__["a" /* QuadroDetalheComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quadro_detalhe__["a" /* QuadroDetalheComponent */])
        ],
        entryComponents: [],
        providers: []
    })
], QuadroDetalheComponentModule);

//# sourceMappingURL=quadro-detalhe.module.js.map

/***/ })

});
//# sourceMappingURL=1.js.map