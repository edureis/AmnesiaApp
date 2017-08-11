webpackJsonp([0],{

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuadrosComponent; });
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


var QuadrosComponent = (function () {
    function QuadrosComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    QuadrosComponent.prototype.ngOnInit = function () {
        this.getQuadros();
    };
    QuadrosComponent.prototype.getQuadros = function () {
        this.quadros = [
            {
                "id": 1,
                "titulo": "Quadro 1",
                "descricao": "Este é o primeiro quadro"
            },
            {
                "id": 2,
                "titulo": "Quadro 2",
                "descricao": "Este é o segundo quadro"
            },
            {
                "id": 3,
                "titulo": "Quadro 3",
                "descricao": "Este é o terceiro quadro"
            },
            {
                "id": 4,
                "titulo": "Quadro 4",
                "descricao": "Este é o quarto quadro"
            },
            {
                "id": 5,
                "titulo": "Quadro 5",
                "descricao": "Este é o quinto quadro"
            },
            {
                "id": 6,
                "titulo": "Quadro 6",
                "descricao": "Este é o sexto quadro"
            }
        ];
    };
    QuadrosComponent.prototype.goToDetalheQuadros = function (quadro) {
        this.navCtrl.push('quadro/show', {
            id: quadro['id'],
            quadro: quadro
        });
    };
    return QuadrosComponent;
}());
QuadrosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        name: "quadros",
        segment: "quadros"
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-quadros',template:/*ion-inline-start:"/home/eduardoreis/AmnesiaApp/src/pages/quadros/quadros.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle icon-only>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title *ngIf="quadro">{{quadro.titulo}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page1">\n    <ion-grid fixed>\n        <h2 id="quadros-heading1" style="color:#1C6CE9;text-align:center;">\n            Quadros\n        </h2>\n\n        <ion-searchbar placeholder="Pesquise pelo título do quadro"\n            name="Pesquisa" id="quadros-search1" class="PesquisarQuadro">\n        </ion-searchbar>\n\n        <div class="spacer" style="height:25px;" id="quadros-spacer3"></div>\n\n        <ion-row>\n            <ion-col col-4 *ngFor="let quadro of quadros">\n                <div color="positive" (click)="goToDetalheQuadros(quadro)" class="item-quadro">\n                    <div class="lista-quadro-title">\n                        <span>{{quadro.titulo}}</span>\n                    </div>\n\n                    <div class="lista-quadro-descricao">\n                        <span>{{quadro.descricao}}</span>\n                    </div>\n                    <ion-note item-right></ion-note>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-card id="quadros-card21">\n            <ion-list></ion-list>\n        </ion-card>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/eduardoreis/AmnesiaApp/src/pages/quadros/quadros.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], QuadrosComponent);

//# sourceMappingURL=quadros.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuadrosComponentModule", function() { return QuadrosComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quadros__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuadrosComponentModule = (function () {
    function QuadrosComponentModule() {
    }
    return QuadrosComponentModule;
}());
QuadrosComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__quadros__["a" /* QuadrosComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quadros__["a" /* QuadrosComponent */])
        ],
        entryComponents: [],
        providers: []
    })
], QuadrosComponentModule);

//# sourceMappingURL=quadros.module.js.map

/***/ })

});
//# sourceMappingURL=0.js.map