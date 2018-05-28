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
/* harmony import */ var _songs_songs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./songs/songs.component */ "./src/app/songs/songs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { ArtistsComponent } from './artists/artists.component';
var routes = [
    { path: ':lang/songs', component: _songs_songs_component__WEBPACK_IMPORTED_MODULE_2__["SongsComponent"] }
    // , { path: ':lang/artists', component: ArtistsComponent }
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
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./window.service */ "./src/app/window.service.ts");
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
    function AppComponent(windowService) {
        this.windowService = windowService;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_window_service__WEBPACK_IMPORTED_MODULE_1__["WindowService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _songs_songs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./songs/songs.component */ "./src/app/songs/songs.component.ts");
/* harmony import */ var _song_detail_song_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./song-detail/song-detail.component */ "./src/app/song-detail/song-detail.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _songs_songs_component__WEBPACK_IMPORTED_MODULE_4__["SongsComponent"],
                _song_detail_song_detail_component__WEBPACK_IMPORTED_MODULE_5__["SongDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

/***/ "./src/app/mock-songs.ts":
/*!*******************************!*\
  !*** ./src/app/mock-songs.ts ***!
  \*******************************/
/*! exports provided: SONGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SONGS", function() { return SONGS; });
var SONGS = [
    { id: 12, name: 'Yellow ledbetter' },
    { id: 146, name: 'Blackbird' }
];


/***/ }),

/***/ "./src/app/song-detail/song-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/song-detail/song-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"song\">\n  <h2>{{ song.name | uppercase }} Details</h2>\n  <div><span>id: </span>{{song.id}}</div>\n  <div>\n    <label>name:\n      <input [(ngModel)]=\"song.name\" placeholder=\"name\">\n    </label>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/song-detail/song-detail.component.scss":
/*!********************************************************!*\
  !*** ./src/app/song-detail/song-detail.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/song-detail/song-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/song-detail/song-detail.component.ts ***!
  \******************************************************/
/*! exports provided: SongDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongDetailComponent", function() { return SongDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _song__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../song */ "./src/app/song.ts");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../window.service */ "./src/app/window.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SongDetailComponent = /** @class */ (function () {
    function SongDetailComponent(windowService) {
        this.windowService = windowService;
    }
    SongDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _song__WEBPACK_IMPORTED_MODULE_1__["Song"])
    ], SongDetailComponent.prototype, "song", void 0);
    SongDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-song-detail',
            template: __webpack_require__(/*! ./song-detail.component.html */ "./src/app/song-detail/song-detail.component.html"),
            styles: [__webpack_require__(/*! ./song-detail.component.scss */ "./src/app/song-detail/song-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_window_service__WEBPACK_IMPORTED_MODULE_2__["WindowService"]])
    ], SongDetailComponent);
    return SongDetailComponent;
}());



/***/ }),

/***/ "./src/app/song.service.ts":
/*!*********************************!*\
  !*** ./src/app/song.service.ts ***!
  \*********************************/
/*! exports provided: SongService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongService", function() { return SongService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_songs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-songs */ "./src/app/mock-songs.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SongService = /** @class */ (function () {
    function SongService() {
    }
    SongService.prototype.getSongs = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_songs__WEBPACK_IMPORTED_MODULE_1__["SONGS"]);
    };
    SongService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SongService);
    return SongService;
}());



/***/ }),

/***/ "./src/app/song.ts":
/*!*************************!*\
  !*** ./src/app/song.ts ***!
  \*************************/
/*! exports provided: Song */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Song", function() { return Song; });
var Song = /** @class */ (function () {
    function Song() {
    }
    return Song;
}());



/***/ }),

/***/ "./src/app/songs/songs.component.html":
/*!********************************************!*\
  !*** ./src/app/songs/songs.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{ localization.trans('title.songs')}}</h2>\r\n<div class=\"row grid header\">\r\n\t<div class=\"col-6\">\r\n\t  {{ localization.trans('grid.name') }}\r\n\t</div>\r\n\t<div class=\"col-4\">\r\n\t</div>  \r\n\t<div class=\"col-2\"></div>\t\r\n</div>\r\n<div class=\"row grid\" *ngFor=\"let song of songs\" (click)=\"onSelect(song)\" [class.selected]=\"song === selectedSong\">\r\n\t<div class=\"col-6\">\r\n\t  {{ song.name }}\r\n\t</div>\r\n\t<div class=\"col-4\">\r\n\t</div>\r\n\t<div class=\"col-2\">\r\n\t\t<i class=\"fas fa-trash\"></i>\r\n\t</div>\r\n</div>\r\n<app-song-detail [song]=\"selectedSong\"></app-song-detail>"

/***/ }),

/***/ "./src/app/songs/songs.component.scss":
/*!********************************************!*\
  !*** ./src/app/songs/songs.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/songs/songs.component.ts":
/*!******************************************!*\
  !*** ./src/app/songs/songs.component.ts ***!
  \******************************************/
/*! exports provided: SongsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsComponent", function() { return SongsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../song.service */ "./src/app/song.service.ts");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../window.service */ "./src/app/window.service.ts");
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




var SongsComponent = /** @class */ (function () {
    function SongsComponent(windowService, localization, songService) {
        this.windowService = windowService;
        this.localization = localization;
        this.songService = songService;
        console.log(windowService.nativeWindow._app.saveUrl);
    }
    SongsComponent.prototype.ngOnInit = function () {
        // console.log(jQuery);
        this.getSongs();
    };
    SongsComponent.prototype.onSelect = function (song) {
        this.selectedSong = song;
    };
    SongsComponent.prototype.getSongs = function () {
        var _this = this;
        this.songService.getSongs().subscribe(function (songs) { return _this.songs = songs; });
    };
    SongsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-songs',
            template: __webpack_require__(/*! ./songs.component.html */ "./src/app/songs/songs.component.html"),
            styles: [__webpack_require__(/*! ./songs.component.scss */ "./src/app/songs/songs.component.scss")]
        }),
        __metadata("design:paramtypes", [_window_service__WEBPACK_IMPORTED_MODULE_2__["WindowService"],
            _localization_service__WEBPACK_IMPORTED_MODULE_3__["LocalizationService"],
            _song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]])
    ], SongsComponent);
    return SongsComponent;
}());



/***/ }),

/***/ "./src/app/window.service.ts":
/*!***********************************!*\
  !*** ./src/app/window.service.ts ***!
  \***********************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
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
var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WindowService.prototype, "translator", {
        get: function () {
            return _window().Translator;
        },
        enumerable: true,
        configurable: true
    });
    WindowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WindowService);
    return WindowService;
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