webpackJsonp([0],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardListComponentModule", function() { return BoardListComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_recaptcha__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_recaptcha__);
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
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginComponent */]),
            __WEBPACK_IMPORTED_MODULE_3_angular2_recaptcha__["ReCaptchaModule"],
        ],
        entryComponents: [],
        providers: []
    })
], BoardListComponentModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(15);
var captcha_service_1 = __webpack_require__(267);
var ReCaptchaComponent = (function () {
    function ReCaptchaComponent(_zone, _captchaService) {
        this._zone = _zone;
        this._captchaService = _captchaService;
        this.site_key = null;
        this.theme = 'light';
        this.type = 'image';
        this.size = 'normal';
        this.tabindex = 0;
        this.badge = 'bottomright';
        /* Available languages: https://developers.google.com/recaptcha/docs/language */
        this.language = null;
        this.captchaResponse = new core_1.EventEmitter();
        this.captchaExpired = new core_1.EventEmitter();
        this.widgetId = null;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    ReCaptchaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._captchaService.getReady(this.language)
            .subscribe(function (ready) {
            if (!ready)
                return;
            // noinspection TypeScriptUnresolvedVariable,TypeScriptUnresolvedFunction
            _this.widgetId = window.grecaptcha.render(_this.targetRef.nativeElement, {
                'sitekey': _this.site_key,
                'badge': _this.badge,
                'theme': _this.theme,
                'type': _this.type,
                'size': _this.size,
                'tabindex': _this.tabindex,
                'callback': (function (response) { return _this._zone.run(_this.recaptchaCallback.bind(_this, response)); }),
                'expired-callback': (function () { return _this._zone.run(_this.recaptchaExpiredCallback.bind(_this)); })
            });
        });
    };
    // noinspection JSUnusedGlobalSymbols
    ReCaptchaComponent.prototype.reset = function () {
        if (this.widgetId === null)
            return;
        // noinspection TypeScriptUnresolvedVariable
        window.grecaptcha.reset(this.widgetId);
        this.onChange(null);
    };
    // noinspection JSUnusedGlobalSymbols
    ReCaptchaComponent.prototype.execute = function () {
        if (this.widgetId === null)
            return;
        // noinspection TypeScriptUnresolvedVariable
        window.grecaptcha.execute(this.widgetId);
    };
    ReCaptchaComponent.prototype.getResponse = function () {
        if (this.widgetId === null)
            return null;
        // noinspection TypeScriptUnresolvedVariable
        return window.grecaptcha.getResponse(this.widgetId);
    };
    ReCaptchaComponent.prototype.writeValue = function (newValue) {
        /* ignore it */
    };
    ReCaptchaComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ReCaptchaComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ReCaptchaComponent.prototype.recaptchaCallback = function (response) {
        this.onChange(response);
        this.onTouched();
        this.captchaResponse.emit(response);
    };
    ReCaptchaComponent.prototype.recaptchaExpiredCallback = function () {
        this.onChange(null);
        this.onTouched();
        this.captchaExpired.emit();
    };
    return ReCaptchaComponent;
}());
ReCaptchaComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 're-captcha',
                template: '<div #target></div>',
                providers: [
                    {
                        provide: forms_1.NG_VALUE_ACCESSOR,
                        useExisting: core_1.forwardRef(function () { return ReCaptchaComponent; }),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
ReCaptchaComponent.ctorParameters = function () { return [
    { type: core_1.NgZone, },
    { type: captcha_service_1.ReCaptchaService, },
]; };
ReCaptchaComponent.propDecorators = {
    'site_key': [{ type: core_1.Input },],
    'theme': [{ type: core_1.Input },],
    'type': [{ type: core_1.Input },],
    'size': [{ type: core_1.Input },],
    'tabindex': [{ type: core_1.Input },],
    'badge': [{ type: core_1.Input },],
    'language': [{ type: core_1.Input },],
    'captchaResponse': [{ type: core_1.Output },],
    'captchaExpired': [{ type: core_1.Output },],
    'targetRef': [{ type: core_1.ViewChild, args: ['target',] },],
};
exports.ReCaptchaComponent = ReCaptchaComponent;


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var BehaviorSubject_1 = __webpack_require__(270);
/*
 * Common service shared by all reCaptcha component instances
 * through dependency injection.
 * This service has the task of loading the reCaptcha API once for all.
 * Only the first instance of the component creates the service, subsequent
 * components will use the existing instance.
 *
 * As the language is passed to the <script>, the first component
 * determines the language of all subsequent components. This is a limitation
 * of the present Google API.
 */
var ReCaptchaService = (function () {
    function ReCaptchaService(zone) {
        var _this = this;
        this.scriptLoaded = false;
        this.readySubject = new BehaviorSubject_1.BehaviorSubject(false);
        /* the callback needs to exist before the API is loaded */
        window["reCaptchaOnloadCallback"] = (function () { return zone.run(_this.onloadCallback.bind(_this)); });
    }
    ReCaptchaService.prototype.getReady = function (language) {
        if (!this.scriptLoaded) {
            this.scriptLoaded = true;
            var doc = document.body;
            var script = document.createElement('script');
            script.innerHTML = '';
            script.src = 'https://www.google.com/recaptcha/api.js?onload=reCaptchaOnloadCallback&render=explicit' +
                (language ? '&hl=' + language : '');
            script.async = true;
            script.defer = true;
            doc.appendChild(script);
        }
        return this.readySubject.asObservable();
    };
    ReCaptchaService.prototype.onloadCallback = function () {
        this.readySubject.next(true);
    };
    return ReCaptchaService;
}());
ReCaptchaService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ReCaptchaService.ctorParameters = function () { return [
    { type: core_1.NgZone, },
]; };
exports.ReCaptchaService = ReCaptchaService;
/* singleton pattern taken from https://github.com/angular/angular/issues/13854 */
function RECAPTCHA_SERVICE_PROVIDER_FACTORY(ngZone, parentDispatcher) {
    return parentDispatcher || new ReCaptchaService(ngZone);
}
exports.RECAPTCHA_SERVICE_PROVIDER_FACTORY = RECAPTCHA_SERVICE_PROVIDER_FACTORY;
exports.RECAPTCHA_SERVICE_PROVIDER = {
    provide: ReCaptchaService,
    deps: [core_1.NgZone, [new core_1.Optional(), new core_1.SkipSelf(), ReCaptchaService]],
    useFactory: RECAPTCHA_SERVICE_PROVIDER_FACTORY
};


/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(99);
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
    function LoginComponent(navCtrl, toastCtrl, menu, loadingCtrl, _login, http) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this._login = _login;
        this.http = http;
    }
    LoginComponent.prototype.ionViewDidLoad = function () {
        this.menu.swipeEnable(false);
    };
    LoginComponent.prototype.getRecaptcha = function (Code) {
        this.RECaptchaCode = Code;
    };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        this.ShowLoadingLogin = true;
        this._login.doLogin(this.email, this.password, this.RECaptchaCode).subscribe(function (result) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',template:/*ion-inline-start:"/media/rosampa94/Lion man/Google Drive/Estudos/FATEC/TCC/Projeto/AmnesiaApp/src/pages/login/login.html"*/'<script src=\'https://www.google.com/recaptcha/api.js\'></script>\n<ion-content class="login">\n	<ion-grid fixed>\n		<ion-row>\n			<ion-col col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-sm-12 col-xs-12>\n				<form #form="ngForm" (ngSubmit)="doLogin()">\n					<ion-item class="login-form-field">\n						<ion-label fixed>Login</ion-label>\n						<ion-input type="email" id="email" name="email"\n							placeholder="Digite seu login" [(ngModel)]="email">\n						</ion-input>\n					</ion-item>\n\n					<ion-item class="login-form-field">\n						<ion-label fixed>Senha</ion-label>              \n						<ion-input type="password" clearOnEdit="false" \n							placeholder="Digite sua senha"\n							name="password" [(ngModel)]="password">\n						</ion-input>\n					</ion-item>\n					<re-captcha (captchaResponse)="getRecaptcha($event)" site_key="6Ldr4EIUAAAAANkL-L5Sd9ol003ysMfGzRWWflI7" language="pt-BR"></re-captcha>					\n					<div class="login-submit">\n						<button id="submitLogin" ion-button full type="submit">\n							Entrar\n						</button>		\n						<div class="progress" *ngIf="ShowLoadingLogin">\n							<div class="indeterminate"></div>\n						</div>\n					</div>\n				</form>\n\n				<div class="bottom-block">\n					<a href="https://amnesia.servehttp.com/register">Criar Conta</a>\n				</div>\n				<div class="bottom-block">\n					<a href="https://amnesia.servehttp.com/recover/password">Esqueci minha senha</a>\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"/media/rosampa94/Lion man/Google Drive/Estudos/FATEC/TCC/Projeto/AmnesiaApp/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var captcha_component_1 = __webpack_require__(266);
var captcha_service_1 = __webpack_require__(267);
var ReCaptchaModule = (function () {
    function ReCaptchaModule() {
    }
    return ReCaptchaModule;
}());
ReCaptchaModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [captcha_component_1.ReCaptchaComponent],
                exports: [captcha_component_1.ReCaptchaComponent],
                providers: [captcha_service_1.RECAPTCHA_SERVICE_PROVIDER]
            },] },
];
/** @nocollapse */
ReCaptchaModule.ctorParameters = function () { return []; };
exports.ReCaptchaModule = ReCaptchaModule;
__export(__webpack_require__(266));


/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(30);
var ObjectUnsubscribedError_1 = __webpack_require__(194);
/**
 * @class BehaviorSubject<T>
 */
var BehaviorSubject = (function (_super) {
    __extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        _super.call(this);
        this._value = _value;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(Subject_1.Subject));
exports.BehaviorSubject = BehaviorSubject;
//# sourceMappingURL=BehaviorSubject.js.map

/***/ })

});
//# sourceMappingURL=0.js.map