webpackJsonp([1],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardDetailsComponentModule", function() { return BoardDetailsComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__board_details__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BoardDetailsComponentModule = (function () {
    function BoardDetailsComponentModule() {
    }
    return BoardDetailsComponentModule;
}());
BoardDetailsComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__board_details__["a" /* BoardDetailsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__board_details__["a" /* BoardDetailsComponent */])
        ],
        entryComponents: [],
        providers: []
    })
], BoardDetailsComponentModule);

//# sourceMappingURL=board-details.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardDetailsComponent = (function () {
    function BoardDetailsComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BoardDetailsComponent.prototype.ngOnInit = function () {
        this.board = this.navParams.get('board');
    };
    return BoardDetailsComponent;
}());
BoardDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        name: "board/show",
        segment: "board/:id"
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'board-details',template:/*ion-inline-start:"/home/eduardo/Documentos/projetos/AmnesiaApp/src/pages/boards/board-details.html"*/'<!-- <ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle icon-only>\n            <ion-icon name="menu"></ion-icon>\n        </button>        \n        <ion-title>Detalhe do quadro</ion-title>\n    </ion-navbar>\n</ion-header> -->\n\n<ion-content no-padding *ngIf="board">\n    <ion-grid fixed>\n        <h2 class="page-title">Detalhe do quadro</h2>\n\n        <ion-row class="board-detail-row">\n            <div class="input-block" col-12>\n                <ion-col col-3>\n                    <ion-icon md="ios-bulb"></ion-icon>\n                </ion-col>\n\n                <ion-col col-3>\n                    <span>Titulo</span>\n                </ion-col>\n\n                <ion-col col-9>\n                    <input [(ngModel)]="board.titulo"/>\n                </ion-col>\n            </div>\n\n            <div class="input-block" col-12>\n                <ion-col col-3>\n                    <span>Descrição</span>\n                </ion-col>\n\n                <ion-col col-9>\n                    <input [(ngModel)]="board.descricao"/>\n                </ion-col>\n            </div>\n        </ion-row>\n        \n        <button ion-button col-12>Salvar</button>\n        <button ion-button clear col-12>Cancelar</button>\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/eduardo/Documentos/projetos/AmnesiaApp/src/pages/boards/board-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], BoardDetailsComponent);

//# sourceMappingURL=board-details.js.map

/***/ })

});
//# sourceMappingURL=1.js.map