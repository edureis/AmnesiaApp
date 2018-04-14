webpackJsonp([1],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardListComponentModule", function() { return BoardListComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__board_list__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BoardListComponentModule = (function () {
    function BoardListComponentModule() {
    }
    return BoardListComponentModule;
}());
BoardListComponentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__board_list__["a" /* BoardListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__board_list__["a" /* BoardListComponent */])
        ],
        entryComponents: [],
        providers: []
    })
], BoardListComponentModule);

//# sourceMappingURL=board-list.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardListComponent = (function () {
    function BoardListComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BoardListComponent.prototype.ngOnInit = function () {
        this.getBoards();
    };
    BoardListComponent.prototype.getBoards = function () {
        this.boards = [
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
    BoardListComponent.prototype.goToBoardDetails = function (board) {
        this.navCtrl.push('board/show', {
            id: board['id'],
            board: board
        });
    };
    BoardListComponent.prototype.searchBoard = function ($event) {
        this.getBoards();
        var searchTerm = $event.target.value;
        if (searchTerm && searchTerm.trim() != '')
            this.boards = this.boards.filter(function (board) {
                return (board.titulo.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
            });
    };
    return BoardListComponent;
}());
BoardListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        name: "boards",
        segment: "boards"
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'board-list',template:/*ion-inline-start:"/media/rosampa94/Lion man/Google Drive/Estudos/FATEC/TCC/Projeto/AmnesiaApp/src/pages/boards/board-list.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Quadros</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n    <ion-grid fixed>\n        <ion-searchbar placeholder="Pesquise pelo título do quadro"\n            name="Pesquisa" id="quadros-search1"\n            (ionInput)="searchBoard($event)">\n        </ion-searchbar>\n\n        <ion-row class="board-list-row">\n            <ion-col col-12 *ngFor="let board of boards">\n                <div color="positive" (click)="goToBoardDetails(board)" class="board-item">\n                    <div class="board-list-title">\n                        <span>{{board.titulo}}</span>\n                    </div>\n\n                    <div class="board-list-description">\n                        <span>{{board.descricao}}</span>\n                    </div>\n                    <ion-note item-right></ion-note>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content> '/*ion-inline-end:"/media/rosampa94/Lion man/Google Drive/Estudos/FATEC/TCC/Projeto/AmnesiaApp/src/pages/boards/board-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], BoardListComponent);

//# sourceMappingURL=board-list.js.map

/***/ })

});
//# sourceMappingURL=1.js.map