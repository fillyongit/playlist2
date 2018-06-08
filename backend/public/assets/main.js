(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _artists_artists_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artists/artists.component */ "./src/app/artists/artists.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { ArtistsComponent } from './artists/artists.component';
var routes = [
    { path: 'artists', component: _artists_artists_component__WEBPACK_IMPORTED_MODULE_2__["ArtistsComponent"] }
    // { path: ':lang/artists', component: ArtistsComponent }
    // , { path: ':lang/artists', component: ArtistsComponent }
    // , { path: '**', component: PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(configService) {
        this.configService = configService;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _artists_artists_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./artists/artists.component */ "./src/app/artists/artists.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./artist-detail/artist-detail.component */ "./src/app/artist-detail/artist-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _artists_artists_component__WEBPACK_IMPORTED_MODULE_5__["ArtistsComponent"],
                _artist_detail_artist_detail_component__WEBPACK_IMPORTED_MODULE_7__["ArtistDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/artist-detail/artist-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/artist-detail/artist-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"artist\">\n  <h2>{{ artist.name | uppercase }} Details</h2>\n  <div><span>id: </span>{{artist.id}}</div>\n  <div>\n    <label>{{ localization.trans('entity.name') }}:\n      <input [(ngModel)]=\"artist.name\" placeholder=\"name\"/>\n    </label>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/artist-detail/artist-detail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/artist-detail/artist-detail.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/artist-detail/artist-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/artist-detail/artist-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: ArtistDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistDetailComponent", function() { return ArtistDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _artist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../artist */ "./src/app/artist.ts");
/* harmony import */ var _localization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localization.service */ "./src/app/localization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistDetailComponent = /** @class */ (function () {
    function ArtistDetailComponent(localization) {
        this.localization = localization;
    }
    ArtistDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _artist__WEBPACK_IMPORTED_MODULE_1__["Artist"])
    ], ArtistDetailComponent.prototype, "artist", void 0);
    ArtistDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-artist-detail',
            template: __webpack_require__(/*! ./artist-detail.component.html */ "./src/app/artist-detail/artist-detail.component.html"),
            styles: [__webpack_require__(/*! ./artist-detail.component.scss */ "./src/app/artist-detail/artist-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_localization_service__WEBPACK_IMPORTED_MODULE_2__["LocalizationService"]])
    ], ArtistDetailComponent);
    return ArtistDetailComponent;
}());



/***/ }),

/***/ "./src/app/artist.service.ts":
/*!***********************************!*\
  !*** ./src/app/artist.service.ts ***!
  \***********************************/
/*! exports provided: ArtistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistService", function() { return ArtistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity.service */ "./src/app/entity.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistService = /** @class */ (function () {
    function ArtistService(configService, entityService) {
        this.configService = configService;
        this.entityService = entityService;
    }
    ArtistService.prototype.getArtists = function () {
        return this.entityService.getEntities('artists');
    };
    ArtistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _entity_service__WEBPACK_IMPORTED_MODULE_1__["EntityService"]])
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "./src/app/artist.ts":
/*!***************************!*\
  !*** ./src/app/artist.ts ***!
  \***************************/
/*! exports provided: Artist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Artist", function() { return Artist; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/app/entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Artist = /** @class */ (function (_super) {
    __extends(Artist, _super);
    function Artist() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Artist;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"]));



/***/ }),

/***/ "./src/app/artists/artists.component.html":
/*!************************************************!*\
  !*** ./src/app/artists/artists.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{ localization.trans('title.artists')}}</h2>\r\n<div class=\"row grid header\">\r\n\t<div class=\"col-6\">\r\n\t  {{ localization.trans('grid.name') }}\r\n\t</div>\r\n\t<div class=\"col-4\">\r\n\t</div>  \r\n\t<div class=\"col-2\"></div>\t\r\n</div>\r\n<div class=\"row grid\" *ngFor=\"let artist of artists\" (click)=\"onSelect(artist)\" [class.selected]=\"artist === selectedArtist\">\r\n\t<div class=\"col-6\">\r\n\t  {{ artist.name }}\r\n\t</div>\r\n\t<div class=\"col-4\">\r\n\t  {{ artist.prova }}\r\n\t</div>\r\n\t<div class=\"col-2\">\r\n\t\t<i class=\"fas fa-trash\"></i>\r\n\t</div>\r\n</div>\r\n<app-artist-detail [artist]=\"selectedArtist\"></app-artist-detail>"

/***/ }),

/***/ "./src/app/artists/artists.component.scss":
/*!************************************************!*\
  !*** ./src/app/artists/artists.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/artists/artists.component.ts":
/*!**********************************************!*\
  !*** ./src/app/artists/artists.component.ts ***!
  \**********************************************/
/*! exports provided: ArtistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistsComponent", function() { return ArtistsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _artist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../artist.service */ "./src/app/artist.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _localization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localization.service */ "./src/app/localization.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistsComponent = /** @class */ (function () {
    function ArtistsComponent(configService, localization, artistService) {
        this.configService = configService;
        this.localization = localization;
        this.artistService = artistService;
        console.log(configService.getParam('env'));
    }
    ArtistsComponent.prototype.ngOnInit = function () {
        // console.log(jQuery);
        this.getArtists();
    };
    ArtistsComponent.prototype.onSelect = function (artist) {
        this.selectedArtist = artist;
    };
    ArtistsComponent.prototype.getArtists = function () {
        var _this = this;
        this.artistService.getArtists().subscribe(function (artists) { return _this.artists = artists; });
    };
    ArtistsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-artists',
            template: __webpack_require__(/*! ./artists.component.html */ "./src/app/artists/artists.component.html"),
            styles: [__webpack_require__(/*! ./artists.component.scss */ "./src/app/artists/artists.component.scss")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"],
            _localization_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"],
            _artist_service__WEBPACK_IMPORTED_MODULE_1__["ArtistService"]])
    ], ArtistsComponent);
    return ArtistsComponent;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//+ (environment.production ? '.prod' : '');
function _window() {
    // return the native window obj
    return window;
}
var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    Object.defineProperty(ConfigService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "translator", {
        get: function () {
            return _window().Translator;
        },
        enumerable: true,
        configurable: true
    });
    ConfigService.prototype.getParam = function (paramName) {
        return (_config__WEBPACK_IMPORTED_MODULE_1__["config"].hasOwnProperty(paramName) ? _config__WEBPACK_IMPORTED_MODULE_1__["config"][paramName] : _window()._app[paramName]);
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
var config = {
    env: 'dev'
};


/***/ }),

/***/ "./src/app/entity.service.ts":
/*!***********************************!*\
  !*** ./src/app/entity.service.ts ***!
  \***********************************/
/*! exports provided: EntityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityService", function() { return EntityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EntityService = /** @class */ (function () {
    function EntityService(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    EntityService.prototype.getEntities = function (what) {
        // return of(ARTISTS).pipe(tap(data => console.log(data));
        var url = this.configService.getParam('listUrl').replace(/__what__/, what);
        // this.http.get(), senza specificare il tipo restituito, restituisce un Observable<Objec>
        return this.http.get(url, { withCredentials: true, responseType: 'json' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            // Converto la response che è un'object di stringhe json, in un'array di oggetti.
            // res è un oggetto non un array in senso stretto.
            var data = [];
            for (var i in res) {
                data[i] = JSON.parse(res[i]);
            }
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEntities', [])));
    };
    EntityService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    EntityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], EntityService);
    return EntityService;
}());



/***/ }),

/***/ "./src/app/entity.ts":
/*!***************************!*\
  !*** ./src/app/entity.ts ***!
  \***************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
var Entity = /** @class */ (function () {
    function Entity() {
    }
    return Entity;
}());



/***/ }),

/***/ "./src/app/localization.service.ts":
/*!*****************************************!*\
  !*** ./src/app/localization.service.ts ***!
  \*****************************************/
/*! exports provided: LocalizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationService", function() { return LocalizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function _window() {
    // return the native window obj
    return window;
}
var LocalizationService = /** @class */ (function () {
    function LocalizationService() {
    }
    LocalizationService.prototype.trans = function (headword) {
        return _window().Translator.trans(headword);
    };
    LocalizationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LocalizationService);
    return LocalizationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome */ "./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-free-solid */ "./node_modules/@fortawesome/fontawesome-free-solid/index.es.js");





window['jQuery'] = window['$'] = jquery__WEBPACK_IMPORTED_MODULE_4__;

window['Popper'] = popper_js__WEBPACK_IMPORTED_MODULE_5__;


// Add the icon to the library so you can use it in your page
_fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_6__["default"].library.add(_fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_7__["default"].faPencilAlt);
_fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_6__["default"].library.add(_fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_7__["default"].faTrash);
_fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_6__["default"].library.add(_fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_7__["default"].faHeadphones);
_fortawesome_fontawesome__WEBPACK_IMPORTED_MODULE_6__["default"].library.add(_fortawesome_fontawesome_free_solid__WEBPACK_IMPORTED_MODULE_7__["default"].faPlay);
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alessio\Lavoro\playlist2\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map