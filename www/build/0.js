webpackJsonp([0],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardListComponentModule", function() { return BoardListComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(268);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginComponent */])
        ],
        entryComponents: [],
        providers: []
    })
], BoardListComponentModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var LoginComponent = (function () {
    function LoginComponent(navCtrl, toastCtrl, _login, menu) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this._login = _login;
        this.menu = menu;
    }
    LoginComponent.prototype.ionViewDidLoad = function () {
        this.menu.swipeEnable(false);
    };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        this.ShowLoadingLogin = true;
        this._login.doLogin(this.email, this.password).subscribe(function (result) {
            _this.menu.swipeEnable(true);
            _this.navCtrl.setRoot('boards');
        }, function (error) {
            _this.toastCtrl.create({
                message: "Login falhou, dados inválidos!",
                duration: 4030,
                position: 'bottom'
            }).present();
            _this.ShowLoadingLogin = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])({
        name: "login",
        segment: "login"
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'login',template:/*ion-inline-start:"/home/eduardo/AmnesiaApp/src/pages/login/login.html"*/'<ion-content class="login">\n	<ion-grid fixed>\n		<ion-row>\n			<ion-col col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-sm-12 col-xs-12>\n				<form #form="ngForm" (ngSubmit)="doLogin()">\n					<ion-item class="login-form-field">\n						<ion-label fixed>Login</ion-label>\n						<ion-input type="email" id="email" name="email"\n							placeholder="Digite seu login" [(ngModel)]="email">\n						</ion-input>\n					</ion-item>\n\n					<ion-item class="login-form-field">\n						<ion-label fixed>Senha</ion-label>              \n						<ion-input type="password" clearOnEdit="false" \n							placeholder="Digite sua senha"\n							name="password" [(ngModel)]="password">\n						</ion-input>\n					</ion-item>\n\n					<div class="login-submit">\n						<button id="submitLogin" ion-button full type="submit">\n							Entrar\n						</button>		\n						<div class="progress" *ngIf="ShowLoadingLogin">\n							<div class="indeterminate"></div>\n						</div>\n					</div>\n				</form>\n\n				<div class="bottom-block">\n					<a href="">Criar Conta</a>\n				</div>\n				<div class="bottom-block">\n					<a href="">Esqueci minha senha</a>\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"/home/eduardo/AmnesiaApp/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], LoginComponent);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=0.js.map