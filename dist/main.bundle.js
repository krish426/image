webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_nx_library_nx_service__ = __webpack_require__("../../../../../src/app/shared/nx-library/nx.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(nx) {
        this.nx = nx;
        console.log(this.nx.message.success('Hello World'));
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_nx_library_nx_service__["a" /* NxService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = {
    Api: {
        Auth: {
            Login: 'api/auth/login',
            Register: 'api/auth/register'
        }
    }
};


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_admin_common_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/admin/common/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_common_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/admin/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_common_header_header_component__ = __webpack_require__("../../../../../src/app/components/admin/common/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_common_fixedplugin_fixedplugin_component__ = __webpack_require__("../../../../../src/app/components/admin/common/fixedplugin/fixedplugin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutedComponents */],
                __WEBPACK_IMPORTED_MODULE_8__components_admin_common_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_admin_common_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_admin_common_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_admin_common_fixedplugin_fixedplugin_component__["a" /* FixedpluginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["b" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_auth_auth_component__ = __webpack_require__("../../../../../src/app/components/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_auth_register_register_component__ = __webpack_require__("../../../../../src/app/components/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_auth_login_login_component__ = __webpack_require__("../../../../../src/app/components/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_auth_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/components/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_admin_project_project_component__ = __webpack_require__("../../../../../src/app/components/admin/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_project_add_project_add_project_component__ = __webpack_require__("../../../../../src/app/components/admin/project/add-project/add-project.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    {
        path: 'auth', component: __WEBPACK_IMPORTED_MODULE_2__components_auth_auth_component__["a" /* AuthComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__components_auth_login_login_component__["a" /* LoginComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_auth_login_login_component__["a" /* LoginComponent */] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_auth_register_register_component__["a" /* RegisterComponent */] },
        ]
    },
    {
        path: 'admin', component: __WEBPACK_IMPORTED_MODULE_6__components_admin_admin_component__["a" /* AdminComponent */], children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_7__components_admin_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            {
                path: 'project', component: __WEBPACK_IMPORTED_MODULE_8__components_admin_project_project_component__["a" /* ProjectComponent */], children: [
                    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_9__components_admin_project_add_project_add_project_component__["a" /* AddProjectComponent */] },
                ]
            },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var AppRoutedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__components_auth_auth_component__["a" /* AuthComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components_auth_register_register_component__["a" /* RegisterComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_auth_login_login_component__["a" /* LoginComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components_auth_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_admin_admin_component__["a" /* AdminComponent */],
    __WEBPACK_IMPORTED_MODULE_7__components_admin_dashboard_dashboard_component__["a" /* DashboardComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components_admin_project_project_component__["a" /* ProjectComponent */],
    __WEBPACK_IMPORTED_MODULE_9__components_admin_project_add_project_add_project_component__["a" /* AddProjectComponent */]
];


/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-active-color=\"white\" data-background-color=\"red\" data-image=\"../assets/img/sidebar-1.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-1.jpg)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-header></app-header>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"!isMap()\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n    <app-fixedplugin></app-fixedplugin>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_components_admin_common_header_header_component__ = __webpack_require__("../../../../../src/app/components/admin/common/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_perfect_scrollbar__ = __webpack_require__("../../../../perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminComponent = /** @class */ (function () {
    function AdminComponent(router, location) {
        this.router = router;
        this.yScrollStack = [];
        this.location = location;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new __WEBPACK_IMPORTED_MODULE_6_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps = new __WEBPACK_IMPORTED_MODULE_6_perfect_scrollbar__["a" /* default */](elemSidebar);
        }
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.navbar.sidebarClose();
        });
        this.navItems = [
            { type: __WEBPACK_IMPORTED_MODULE_2__material_material_module__["b" /* NavItemType */].NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__material_material_module__["b" /* NavItemType */].NavbarRight,
                title: '',
                iconClass: 'fa fa-bell-o',
                numNotifications: 5,
                dropdownItems: [
                    { title: 'Notification 1' },
                    { title: 'Notification 2' },
                    { title: 'Notification 3' },
                    { title: 'Notification 4' },
                    { title: 'Another Notification' }
                ]
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__material_material_module__["b" /* NavItemType */].NavbarRight,
                title: '',
                iconClass: 'fa fa-list',
                dropdownItems: [
                    { iconClass: 'pe-7s-mail', title: 'Messages' },
                    { iconClass: 'pe-7s-help1', title: 'Help Center' },
                    { iconClass: 'pe-7s-tools', title: 'Settings' },
                    'separator',
                    { iconClass: 'pe-7s-lock', title: 'Lock Screen' },
                    { iconClass: 'pe-7s-close-circle', title: 'Log Out' }
                ]
            },
            { type: __WEBPACK_IMPORTED_MODULE_2__material_material_module__["b" /* NavItemType */].NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },
            { type: __WEBPACK_IMPORTED_MODULE_2__material_material_module__["b" /* NavItemType */].NavbarLeft, title: 'Account' },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__material_material_module__["b" /* NavItemType */].NavbarLeft,
                title: 'Dropdown',
                dropdownItems: [
                    { title: 'Action' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    'separator',
                    { title: 'Separated link' },
                ]
            },
            { type: __WEBPACK_IMPORTED_MODULE_2__material_material_module__["b" /* NavItemType */].NavbarLeft, title: 'Log out' }
        ];
    };
    AdminComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminComponent.prototype.isMap = function () {
        return true;
        // if (this.location.prepareExternalUrl(this.location.path()) === '/maps/fullscreen') {
        //   return true;
        // } else {
        //   return false;
        // }
    };
    AdminComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new __WEBPACK_IMPORTED_MODULE_6_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps = new __WEBPACK_IMPORTED_MODULE_6_perfect_scrollbar__["a" /* default */](elemSidebar);
            ps.update();
        }
    };
    AdminComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('sidebar'),
        __metadata("design:type", Object)
    ], AdminComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__app_components_admin_common_header_header_component__["a" /* HeaderComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__app_components_admin_common_header_header_component__["a" /* HeaderComponent */])
    ], AdminComponent.prototype, "navbar", void 0);
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/common/fixedplugin/fixedplugin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/common/fixedplugin/fixedplugin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  fixedplugin works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/common/fixedplugin/fixedplugin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedpluginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FixedpluginComponent = /** @class */ (function () {
    function FixedpluginComponent() {
    }
    FixedpluginComponent.prototype.ngOnInit = function () {
    };
    FixedpluginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fixedplugin',
            template: __webpack_require__("../../../../../src/app/components/admin/common/fixedplugin/fixedplugin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin/common/fixedplugin/fixedplugin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FixedpluginComponent);
    return FixedpluginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/common/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/common/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/common/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/admin/common/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin/common/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/common/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav #navbar class=\"navbar navbar-transparent navbar-absolute\">\n  <div class=\"container-fluid\">\n      <div class=\"navbar-minimize\">\n          <button id=\"minimizeSidebar\" class=\"btn btn-round btn-white btn-fill btn-just-icon\">\n              <i class=\"material-icons visible-on-sidebar-regular\">more_vert</i>\n              <i class=\"material-icons visible-on-sidebar-mini\">view_list</i>\n          </button>\n      </div>\n      <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"{{getPath()}}\"> {{getTitle()}} </a>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n          <div (window:resize)=\"onResize($event)\">\n              <ul class=\"nav navbar-nav navbar-right\">\n                  <li>\n                      <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                          <i class=\"material-icons\">dashboard</i>\n                          <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                      </a>\n                  </li>\n                  <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                          <i class=\"material-icons\">notifications</i>\n                          <span class=\"notification\">5</span>\n                          <p class=\"hidden-lg hidden-md\">\n                              Notifications\n                              <b class=\"caret\"></b>\n                          </p>\n                      </a>\n                      <ul class=\"dropdown-menu\">\n                          <li>\n                              <a href=\"#\">Mike John responded to your email</a>\n                          </li>\n                          <li>\n                              <a href=\"#\">You have 5 new tasks</a>\n                          </li>\n                          <li>\n                              <a href=\"#\">You're now friend with Andrew</a>\n                          </li>\n                          <li>\n                              <a href=\"#\">Another Notification</a>\n                          </li>\n                          <li>\n                              <a href=\"#\">Another One</a>\n                          </li>\n                      </ul>\n                  </li>\n                  <li>\n                      <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                          <i class=\"material-icons\">person</i>\n                          <p class=\"hidden-lg hidden-md\">Profile</p>\n                      </a>\n                  </li>\n                  <li class=\"separator hidden-lg hidden-md\"></li>\n              </ul>\n              <form class=\"navbar-form navbar-right\" role=\"search\">\n                  <div class=\"form-group form-search is-empty\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                      <span class=\"material-input\"></span>\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                      <i class=\"material-icons\">search</i>\n                      <div class=\"ripple-container\"></div>\n                  </button>\n              </form>\n          </div>\n      </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/common/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_route_item_model__ = __webpack_require__("../../../../../src/app/components/admin/common/sidebar/route-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_route_item_model__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        if ($('body').hasClass('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        if ($('body').hasClass('hide-sidebar')) {
            misc.hide_sidebar_active = true;
        }
        $('#minimizeSidebar').click(function () {
            if (misc.sidebar_mini_active === true) {
                $('body').removeClass('sidebar-mini');
                misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
        $('#hideSidebar').click(function () {
            if (misc.hide_sidebar_active === true) {
                setTimeout(function () {
                    $('body').removeClass('hide-sidebar');
                    misc.hide_sidebar_active = false;
                }, 300);
                setTimeout(function () {
                    $('.sidebar').removeClass('animation');
                }, 600);
                $('.sidebar').addClass('animation');
            }
            else {
                setTimeout(function () {
                    $('body').addClass('hide-sidebar');
                    // $('.sidebar').addClass('animation');
                    misc.hide_sidebar_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    };
    HeaderComponent.prototype.onResize = function (event) {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    HeaderComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    HeaderComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    HeaderComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    HeaderComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        for (var i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            }
            else if (this.listTitles[i].type === "sub") {
                for (var j = 0; j < this.listTitles[i].children.length; j++) {
                    var subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        return 'Dashboard';
    };
    HeaderComponent.prototype.getPath = function () {
        return this.location.prepareExternalUrl(this.location.path());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('app-navbar-cmp'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "button", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/admin/common/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin/common/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/common/sidebar/route-item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* unused harmony export ROUTE_ITEMS */
var ROUTES = [
    { title: 'Dashboard', path: '/dashboard', type: 'link', icontype: 'dashboard' },
    {
        title: 'Project', path: '/project', type: 'sub', icontype: 'apps', collapse: 'components',
        children: [
            { path: 'buttons', title: 'User Images', ab: 'folder' },
            { path: 'buttons', title: 'New Images', ab: 'folder' },
            { path: 'buttons', title: 'User Data', ab: 'folder' },
            { path: 'buttons', title: 'Personal', ab: 'folder' },
        ]
    },
];
var ROUTE_ITEMS = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/components',
        title: 'Components',
        type: 'sub',
        icontype: 'apps',
        collapse: 'components',
        children: [
            { path: 'buttons', title: 'Buttons', ab: 'B' },
            { path: 'grid', title: 'Grid System', ab: 'GS' },
            { path: 'panels', title: 'Panels', ab: 'P' },
            { path: 'sweet-alert', title: 'Sweet Alert', ab: 'SA' },
            { path: 'notifications', title: 'Notifications', ab: 'N' },
            { path: 'icons', title: 'Icons', ab: 'I' },
            { path: 'typography', title: 'Typography', ab: 'T' }
        ]
    }, {
        path: '/forms',
        title: 'Forms',
        type: 'sub',
        icontype: 'content_paste',
        collapse: 'forms',
        children: [
            { path: 'regular', title: 'Regular Forms', ab: 'RF' },
            { path: 'extended', title: 'Extended Forms', ab: 'EF' },
            { path: 'validation', title: 'Validation Forms', ab: 'VF' },
            { path: 'wizard', title: 'Wizard', ab: 'W' }
        ]
    }, {
        path: '/tables',
        title: 'Tables',
        type: 'sub',
        icontype: 'grid_on',
        collapse: 'tables',
        children: [
            { path: 'regular', title: 'Regular Tables', ab: 'RT' },
            { path: 'extended', title: 'Extended Tables', ab: 'ET' },
            { path: 'datatables.net', title: 'Datatables.net', ab: 'DT' }
        ]
    }, {
        path: '/maps',
        title: 'Maps',
        type: 'sub',
        icontype: 'place',
        collapse: 'maps',
        children: [
            { path: 'google', title: 'Google Maps', ab: 'GM' },
            { path: 'fullscreen', title: 'Full Screen Map', ab: 'FSM' },
            { path: 'vector', title: 'Vector Map', ab: 'VM' }
        ]
    }, {
        path: '/widgets',
        title: 'Widgets',
        type: 'link',
        icontype: 'widgets'
    }, {
        path: '/charts',
        title: 'Charts',
        type: 'link',
        icontype: 'timeline'
    }, {
        path: '/calendar',
        title: 'Calendar',
        type: 'link',
        icontype: 'date_range'
    }, {
        path: '/pages',
        title: 'Pages',
        type: 'sub',
        icontype: 'image',
        collapse: 'pages',
        children: [
            { path: 'pricing', title: 'Pricing', ab: 'P' },
            { path: 'timeline', title: 'Timeline Page', ab: 'TP' },
            { path: 'login', title: 'Login Page', ab: 'LP' },
            { path: 'register', title: 'Register Page', ab: 'RP' },
            { path: 'lock', title: 'Lock Screen Page', ab: 'LSP' },
            { path: 'user', title: 'User Page', ab: 'UP' }
        ]
    }
];


/***/ }),

/***/ "../../../../../src/app/components/admin/common/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/common/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <div class=\"logo-normal\">\n        <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n            Creative Tim\n        </a>\n    </div>\n\n    <div class=\"logo-img\">\n        <img src=\"/assets/img/angular2-logo-white.png\" />\n    </div>\n</div>\n\n\n<div class=\"sidebar-wrapper\">\n\n    <div class=\"user\">\n        <div class=\"photo\">\n            <img src=\"../assets/img/faces/avatar.jpg\" />\n        </div>\n        <div class=\"info\">\n            <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n                <span>\n                    {{ currentUser.firstName + ' ' + currentUser.lastName }}\n                    <b class=\"caret\"></b>\n                </span>\n            </a>\n            <div class=\"collapse\" id=\"collapseExample\">\n                <ul class=\"nav\">\n                    <li>\n                        <a href=\"javascript:void(0)\">\n                            <span class=\"sidebar-mini\">MP</span>\n                            <span class=\"sidebar-normal\">My Profile</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\">\n                            <span class=\"sidebar-mini\">EP</span>\n                            <span class=\"sidebar-normal\">Edit Profile</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\">\n                            <span class=\"sidebar-mini\">S</span>\n                            <span class=\"sidebar-normal\">Settings</span>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"isMobileMenu()\">\n        <form class=\"navbar-form navbar-right\" role=\"search\">\n            <div class=\"form-group form-search is-empty\">\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\">\n                <span class=\"material-input\"></span>\n                <span class=\"material-input\"></span>\n            </div>\n            <button class=\"btn btn-white btn-round btn-just-icon\" type=\"submit\">\n                <i class=\"material-icons\">search</i>\n                <div class=\"ripple-container\"></div>\n            </button>\n        </form>\n        <ul class=\"nav nav-mobile-menu\">\n            <li class=\"\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#pablo\" aria-expanded=\"false\">\n                    <i class=\"material-icons\">dashboard</i>\n                    <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    <div class=\"ripple-container\"></div>\n                </a>\n            </li>\n            <li class=\"dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">\n                    <i class=\"material-icons\">notifications</i>\n                    <span class=\"notification\">5</span>\n                    <p class=\"hidden-lg hidden-md\">\n                        Notifications\n                        <b class=\"caret\"></b>\n                    </p>\n                    <div class=\"ripple-container\"></div>\n                </a>\n                <ul class=\"dropdown-menu\">\n                    <li>\n                        <a href=\"#\">Mike John responded to your email</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">You have 5 new tasks</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">You're now friend with Andrew</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">Another Notification</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">Another One</a>\n                    </li>\n                </ul>\n            </li>\n            <li class=\"\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#pablo\" aria-expanded=\"false\">\n                    <i class=\"material-icons\">person</i>\n                    <p class=\"hidden-lg hidden-md\">Profile</p>\n                    <div class=\"ripple-container\"></div>\n                </a>\n            </li>\n            <li class=\"separator hidden-lg hidden-md\"></li>\n        </ul>\n    </div>\n    <div class=\"nav-container\">\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuitem of menuItems\">\n                <!--If is a single link-->\n                <a [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\n                    <i class=\"material-icons\">{{menuitem.icontype}}</i>\n                    <p>{{menuitem.title}}</p>\n                </a>\n                <!--If it have a submenu-->\n                <a data-toggle=\"collapse\" href=\"#{{menuitem.collapse}}\" *ngIf=\"menuitem.type === 'sub'\" (click)=\"updatePS()\">\n                    <i class=\"material-icons\">{{menuitem.icontype}}</i>\n                    <p>{{menuitem.title}}\n                        <b class=\"caret\"></b>\n                    </p>\n                </a>\n\n                <!--Display the submenu items-->\n                <div id=\"{{menuitem.collapse}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\n                    <ul class=\"nav\">\n                        <li routerLinkActive=\"active\">\n                            <a [routerLink]=\"[add]\">\n                                <i class=\"material-icons\">add_box</i>\n                                <!-- <span class=\"sidebar-mini\">{{childitem.ab}}</span> -->\n                                <span class=\"sidebar-normal\">Add New</span>\n                            </a>\n                        </li>\n                        <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\">\n                            <a [routerLink]=\"[menuitem.path, childitem.path]\">\n                                <i class=\"material-icons\">{{childitem.ab}}</i>\n                                <!-- <span class=\"sidebar-mini\">{{childitem.ab}}</span> -->\n                                <span class=\"sidebar-normal\">{{childitem.title}}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </li>\n            <!-- <li>\n                <a href=\"http://md-pro-angular.creative-tim.com/documentation/tutorial?ref=md-pro-archive\">\n                    <i class=\"material-icons\">school</i>\n                    <p>Documentation</p>\n                </a>\n            </li> -->\n        </ul>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/common/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_perfect_scrollbar__ = __webpack_require__("../../../../perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_nx_library_nx_service__ = __webpack_require__("../../../../../src/app/shared/nx-library/nx.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__("../../../../../src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__route_item_model__ = __webpack_require__("../../../../../src/app/components/admin/common/sidebar/route-item.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//Menu Items
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(nx) {
        this.nx = nx;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* UserModel */]();
        this.currentUser = JSON.parse(this.nx.local.get('currentUser'));
    }
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = __WEBPACK_IMPORTED_MODULE_4__route_item_model__["a" /* ROUTES */].filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.updatePS = function () {
        debugger;
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
            var ps = new __WEBPACK_IMPORTED_MODULE_1_perfect_scrollbar__["a" /* default */](elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    };
    SidebarComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    SidebarComponent.prototype.getUserDetails = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/admin/common/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin/common/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_nx_library_nx_service__["a" /* NxService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header\" data-background-color=\"orange\">\n                        <i class=\"material-icons\">weekend</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <p class=\"category\">Bookings</p>\n                        <h3 class=\"card-title\">184</h3>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons text-danger\">warning</i>\n                            <a href=\"#pablo\">Get More Space...</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <i class=\"material-icons\">equalizer</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <p class=\"category\">Views</p>\n                        <h3 class=\"card-title\">75.521</h3>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">local_offer</i> Google Analytics\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header\" data-background-color=\"green\">\n                        <i class=\"material-icons\">store</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <p class=\"category\">Revenue</p>\n                        <h3 class=\"card-title\">$3,245</h3>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">date_range</i> Last 24 Hours\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header\" data-background-color=\"blue\">\n                        <i class=\"fa fa-twitter\"></i>\n                    </div>\n                    <div class=\"card-content\">\n                        <p class=\"category\">Followers</p>\n                        <h3 class=\"card-title\">+245</h3>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">update</i> Just Updated\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-6\">\n                <div class=\"card card-product\">\n                    <div class=\"card-image\" data-header-animation=\"true\">\n                        <a href=\"#pablo\">\n                            <img class=\"img\" src=\"../assets/img/card-2.jpeg\">\n                        </a>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"card-actions\">\n                            <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                                <i class=\"material-icons\">build</i> Fix Header!\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default btn-simple\"  matTooltip=\"View\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">art_track</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-success btn-simple\"  matTooltip=\"Edit\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">edit</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-danger btn-simple\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                        </div>\n                        <h4 class=\"card-title\">\n                            <a href=\"#pablo\">Cozy 5 Stars Apartment</a>\n                        </h4>\n                        <div class=\"card-description\">\n                            The place is close to Barceloneta Beach and bus stop just 2 min by walk and...\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"price\">\n                            <h4>$899/night</h4>\n                        </div>\n                        <div class=\"stats pull-right\">\n                            <p class=\"category\"><i class=\"material-icons\">place</i> Barcelona, Spain</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n                <div class=\"card card-product\">\n                    <div class=\"card-image\" data-header-animation=\"true\">\n                        <a href=\"#pablo\">\n                            <img class=\"img\" src=\"../assets/img/card-3.jpeg\">\n                        </a>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"card-actions\">\n                            <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                                <i class=\"material-icons\">build</i> Fix Header!\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default btn-simple\" matTooltip=\"View\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">art_track</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-success btn-simple\" matTooltip=\"Edit\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">edit</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-danger btn-simple\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                        </div>\n                        <h4 class=\"card-title\">\n                            <a href=\"#pablo\">Office Studio</a>\n                        </h4>\n                        <div class=\"card-description\">\n                            The place is close to Metro Station and bus stop just 2 min by walk and near...\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"price\">\n                            <h4>$1.119/night</h4>\n                        </div>\n                        <div class=\"stats pull-right\">\n                            <p class=\"category\"><i class=\"material-icons\">place</i> London, UK</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6\">\n                <div class=\"card card-product\">\n                    <div class=\"card-image\" data-header-animation=\"true\">\n                        <a href=\"#pablo\">\n                            <img class=\"img\" src=\"../assets/img/card-1.jpeg\">\n                        </a>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"card-actions\">\n                            <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                                <i class=\"material-icons\">build</i> Fix Header!\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default btn-simple\" matTooltip=\"View\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">art_track</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-success btn-simple\" matTooltip=\"Edit\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">edit</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-danger btn-simple\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">close</i>\n                            </button>\n                        </div>\n                        <h4 class=\"card-title\">\n                            <a href=\"#pablo\">Beautiful Castle</a>\n                        </h4>\n                        <div class=\"card-description\">\n                            The place is close to Metro Station and bus stop just 2 min by walk and near...\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"price\">\n                            <h4>$459/night</h4>\n                        </div>\n                        <div class=\"stats pull-right\">\n                            <p class=\"category\"><i class=\"material-icons\">place</i> Milan, Italy</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-icon\" data-background-color=\"red\">\n                        <i class=\"material-icons\">language</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Global Sales by Top Locations</h4>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <!-- <app-md-table\n                                  [data]=\"tableData\">\n                              </app-md-table> -->\n                            </div>\n                            <div class=\"col-md-6 col-md-offset-1\">\n                                <div id=\"worldMap\" class=\"map\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card card-chart\">\n                    <div class=\"card-header\" data-background-color=\"green\" data-header-animation=\"true\">\n                        <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"card-actions\">\n                            <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                                <i class=\"material-icons\">build</i> Fix Header!\n                            </button>\n                            <button type=\"button\" class=\"btn btn-info btn-simple\" matTooltip=\"Refresh\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">refresh</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default btn-simple\" matTooltip=\"Change Date\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">edit</i>\n                            </button>\n                        </div>\n                        <h4 class=\"card-title\">Daily Sales</h4>\n                        <p class=\"category\">\n                            <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55% </span> increase in today sales.</p>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-chart\">\n                    <div class=\"card-header\" data-background-color=\"orange\" data-header-animation=\"true\">\n                        <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"card-actions\">\n                            <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                                <i class=\"material-icons\">build</i> Fix Header!\n                            </button>\n                            <button type=\"button\" class=\"btn btn-info btn-simple\" matTooltip=\"Refresh\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">refresh</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default btn-simple\" matTooltip=\"Change Date\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">edit</i>\n                            </button>\n                        </div>\n                        <h4 class=\"card-title\">Completed Tasks</h4>\n                        <p class=\"category\">Last Campaign Performance</p>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card card-chart\">\n                    <div class=\"card-header\" data-background-color=\"red\" data-header-animation=\"true\">\n                        <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"card-actions\">\n                            <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\n                                <i class=\"material-icons\">build</i> Fix Header!\n                            </button>\n                            <button type=\"button\" class=\"btn btn-info btn-simple\" matTooltip=\"Refresh\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">refresh</i>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-default btn-simple\" matTooltip=\"Change Date\" [matTooltipPosition]=\"'below'\">\n                                <i class=\"material-icons\">edit</i>\n                            </button>\n                        </div>\n                        <h4 class=\"card-title\">Website Views</h4>\n                        <p class=\"category\">Last Campaign Performance</p>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/project/add-project/add-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/project/add-project/add-project.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  add-project works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/project/add-project/add-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent() {
    }
    AddProjectComponent.prototype.ngOnInit = function () {
    };
    AddProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-project',
            template: __webpack_require__("../../../../../src/app/components/admin/project/add-project/add-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin/project/add-project/add-project.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  project works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project',
            template: __webpack_require__("../../../../../src/app/components/admin/project/project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper wrapper-full-page\">\n  <nav class=\"navbar navbar-primary navbar-transparent navbar-fixed-top\">\n      <div class=\"container\">\n          <div class=\"navbar-header\">\n              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\n                  <span class=\"sr-only\">Toggle navigation</span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n              </button>\n              <a class=\"navbar-brand\" href=\"/#/dashboard\">MD Pro Angular</a>\n          </div>\n          <div class=\"collapse navbar-collapse\" id=\"menu-example\">\n              <ul class=\"nav navbar-nav navbar-right\">\n                  <!-- <li>\n                      <a href=\"/dashboard\">\n                          <i class=\"material-icons\">dashboard</i> Dashboard\n                      </a>\n                  </li> -->\n                  <li routerLinkActive=\"active\">\n                      <a href=\"javascript:void(0);\" routerLink=\"register\">\n                          <i class=\"material-icons\">person_add</i> Register\n                      </a>\n                  </li>\n                  <li routerLinkActive=\"active\" routerLink=\"login\">\n                      <a href=\"javascript:void(0);\">\n                          <i class=\"material-icons\">fingerprint</i> Login\n                      </a>\n                  </li>\n                  <!-- <li class=\"\">\n                      <a href=\"/pages/lock\">\n                          <i class=\"material-icons\">lock_open</i> Lock\n                      </a>\n                  </li> -->\n              </ul>\n          </div>\n      </div>\n  </nav>\n\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-auth',
            template: __webpack_require__("../../../../../src/app/components/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/forgot-password/forgot-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  forgot-password works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/auth/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/components/auth/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page login-page\" filter-color=\"black\">\n    <!--  you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\n    <div class=\"content\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmitForm()\">\n                        <div class=\"card card-login card-hidden\">\n                            <div class=\"card-header text-center\" data-background-color=\"rose\">\n                                <h4 class=\"card-title\">Login</h4>\n                                <div class=\"social-line\">\n                                    <a href=\"#btn\" class=\"btn btn-just-icon btn-simple\">\n                                        <i class=\"fa fa-facebook-square\"></i>\n                                    </a>\n                                    <a href=\"#pablo\" class=\"btn btn-just-icon btn-simple\">\n                                        <i class=\"fa fa-twitter\"></i>\n                                    </a>\n                                    <a href=\"#eugen\" class=\"btn btn-just-icon btn-simple\">\n                                        <i class=\"fa fa-google-plus\"></i>\n                                    </a>\n                                </div>\n                            </div>\n                            <p class=\"category text-center\">\n                                Or Be Classical\n                            </p>\n                            <div class=\"card-content\">\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"material-icons\">email</i>\n                                    </span>\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Email address</label>\n                                        <input formControlName=\"email\" id=\"email\" name=\"email\" type=\"email\" class=\"form-control\">\n                                    </div>\n                                </div>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"material-icons\">lock_outline</i>\n                                    </span>\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Password</label>\n                                        <input type=\"password\" formControlName=\"password\" id=\"password\" name=\"password\" class=\"form-control\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"footer text-center\">\n                                <button type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg\">Let's go</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <nav class=\"pull-left\">\n                <ul>\n                    <li>\n                        <a href=\"#\">\n                            Home\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            Company\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            Portfolio\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            Blog\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <p class=\"copyright pull-right\">\n                &copy;\n                <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n            </p>\n        </div>\n    </footer>\n    <div class=\"full-page-background\" style=\"background-image: url(../../../assets/img/login.jpeg) \"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_data_service__ = __webpack_require__("../../../../../src/app/shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_nx_library_nx_service__ = __webpack_require__("../../../../../src/app/shared/nx-library/nx.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, ds, nx, element) {
        this.fb = fb;
        this.router = router;
        this.ds = ds;
        this.nx = nx;
        this.element = element;
        this.initializeForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
        setTimeout(function () { $('.card').removeClass('card-hidden'); }, 500);
        this.nx.message.success('Hello India');
    };
    LoginComponent.prototype.onSubmitForm = function () {
        var _this = this;
        var req = {
            url: __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* AppConfig */].Api.Auth.Login,
            params: this.loginForm.value
        };
        this.ds.post(req).subscribe(function (res) {
            if (res.status === true) {
                var user = JSON.stringify(res.data.user);
                _this.nx.local.set('currentUser', user);
                _this.nx.local.set('token', res.data.token);
                _this.routeChange('admin/dashboard');
                _this.nx.message.success(res.message);
            }
            else {
                _this.nx.message.error(res.message);
            }
        });
    };
    ;
    LoginComponent.prototype.routeChange = function (path) {
        this.router.navigate([path]);
    };
    ;
    LoginComponent.prototype.initializeForm = function () {
        this.loginForm = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
        });
    };
    LoginComponent.prototype.validateForm = function (formGroup) {
        Object.keys(formGroup.controls).forEach(function (filed) {
            var control = formGroup.get(filed);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__shared_nx_library_nx_service__["a" /* NxService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/auth/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"full-page register-page\" filter-color=\"black\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-10 col-md-offset-1\">\n          <div class=\"card card-signup\">\n            <h2 class=\"card-title text-center\">Register</h2>\n            <div class=\"row\">\n              <div class=\"col-md-5 col-md-offset-1\">\n                <div class=\"card-content\">\n                  <div class=\"info info-horizontal\">\n                    <div class=\"icon icon-rose\">\n                      <i class=\"material-icons\">timeline</i>\n                    </div>\n                    <div class=\"description\">\n                      <h4 class=\"info-title\">Marketing</h4>\n                      <p class=\"description\">\n                        We've created the marketing campaign of the website. It was a very interesting collaboration.\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"info info-horizontal\">\n                    <div class=\"icon icon-primary\">\n                      <i class=\"material-icons\">code</i>\n                    </div>\n                    <div class=\"description\">\n                      <h4 class=\"info-title\">Fully Coded in HTML5</h4>\n                      <p class=\"description\">\n                        We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"info info-horizontal\">\n                    <div class=\"icon icon-info\">\n                      <i class=\"material-icons\">group</i>\n                    </div>\n                    <div class=\"description\">\n                      <h4 class=\"info-title\">Built Audience</h4>\n                      <p class=\"description\">\n                        There is also a Fully Customizable CMS Admin Dashboard for this product.\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-5\">\n                <div class=\"social text-center\">\n                  <button class=\"btn btn-just-icon btn-round btn-twitter\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </button>\n                  <button class=\"btn btn-just-icon btn-round btn-dribbble\">\n                    <i class=\"fa fa-dribbble\"></i>\n                  </button>\n                  <button class=\"btn btn-just-icon btn-round btn-facebook\">\n                    <i class=\"fa fa-facebook\"> </i>\n                  </button>\n                  <h4> or be classical </h4>\n                </div>\n                <form class=\"form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmitForm()\">\n                  <div class=\"card-content\">\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">face</i>\n                      </span>\n                      <input formControlName=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"Enter First Name\">\n                    </div>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">face</i>\n                      </span>\n                      <input formControlName=\"lastName\" type=\"text\" class=\"form-control\" placeholder=\"Enter Last Name\">\n                    </div>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">email</i>\n                      </span>\n                      <input formControlName=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Enter Email Id\">\n                    </div>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"material-icons\">lock_outline</i>\n                      </span>\n                      <input formControlName=\"password\" type=\"password\" placeholder=\"Enter Password\" class=\"form-control\" />\n                    </div>\n                    <!-- If you want to add a checkbox to this form, uncomment this code -->\n                    <div class=\"checkbox\">\n                      <label>\n                        <input type=\"checkbox\" name=\"optionsCheckboxes\" checked> I agree to the\n                        <a href=\"#something\">terms and conditions</a>.\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"footer text-center\">\n                      <button type=\"submit\" class=\"btn btn-primary btn-round\">Get Started</button>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer\">\n      <div class=\"container\">\n        <nav class=\"pull-left\">\n          <ul>\n            <li>\n              <a href=\"#\">\n                Home\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                Company\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                Portfolio\n              </a>\n            </li>\n            <li>\n              <a href=\"#\">\n                Blog\n              </a>\n            </li>\n          </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n          &copy;\n          <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n        </p>\n      </div>\n    </footer>\n    <div class=\"full-page-background\" style=\"background-image: url(../../../assets/img/register.jpeg) \"></div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_data_service__ = __webpack_require__("../../../../../src/app/shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_nx_library_nx_service__ = __webpack_require__("../../../../../src/app/shared/nx-library/nx.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, router, ds, nx, element) {
        this.fb = fb;
        this.router = router;
        this.ds = ds;
        this.nx = nx;
        this.element = element;
        this.initializeForm();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        setTimeout(function () { $('.card').removeClass('card-hidden'); }, 1000);
    };
    RegisterComponent.prototype.onSubmitForm = function () {
        var _this = this;
        var req = {
            url: __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* AppConfig */].Api.Auth.Register,
            params: this.registerForm.value
        };
        this.ds.post(req).subscribe(function (res) {
            if (res.status === true) {
                _this.nx.message.success(res.message);
            }
            else {
                _this.nx.message.error(res.message);
            }
        });
    };
    ;
    RegisterComponent.prototype.routeChange = function (path) {
        this.router.navigate([path]);
    };
    ;
    RegisterComponent.prototype.initializeForm = function () {
        this.registerForm = this.fb.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            acceptTemrs: [false, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
        });
    };
    RegisterComponent.prototype.validateForm = function (formGroup) {
        Object.keys(formGroup.controls).forEach(function (filed) {
            var control = formGroup.get(filed);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/auth/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__shared_nx_library_nx_service__["a" /* NxService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavItemType;
(function (NavItemType) {
    NavItemType[NavItemType["Sidebar"] = 1] = "Sidebar";
    NavItemType[NavItemType["NavbarLeft"] = 2] = "NavbarLeft";
    NavItemType[NavItemType["NavbarRight"] = 3] = "NavbarRight"; // Right-aligned link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
})(NavItemType || (NavItemType = {}));

var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTooltipModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel(_id, firstName, lastName, email) {
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return UserModel;
}());



/***/ }),

/***/ "../../../../../src/app/shared/nx-library/nx-cache.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NxCacheService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NxCacheService = /** @class */ (function () {
    function NxCacheService() {
    }
    NxCacheService.prototype.get = function (id) { };
    ;
    NxCacheService.prototype.set = function (id, value) { };
    ;
    NxCacheService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NxCacheService);
    return NxCacheService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/nx-library/nx-cookie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NxCookieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NxCookieService = /** @class */ (function () {
    function NxCookieService() {
    }
    NxCookieService.prototype.get = function (id) { };
    ;
    NxCookieService.prototype.set = function (id, value) { };
    ;
    NxCookieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NxCookieService);
    return NxCookieService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/nx-library/nx-local.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NxLocalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NxLocalService = /** @class */ (function () {
    function NxLocalService() {
    }
    NxLocalService.prototype.set = function (key, value) {
        localStorage.setItem(key, value);
    };
    NxLocalService.prototype.get = function (key) {
        return localStorage.getItem(key);
    };
    NxLocalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NxLocalService);
    return NxLocalService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/nx-library/nx-message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NxMessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NxMessageService = /** @class */ (function () {
    function NxMessageService() {
    }
    NxMessageService.prototype.success = function (msg) { console.log(msg); };
    ;
    NxMessageService.prototype.error = function (msg) { console.log(msg); };
    ;
    NxMessageService.prototype.info = function (msg) { console.log(msg); };
    ;
    NxMessageService.prototype.warning = function (msg) { console.log(msg); };
    ;
    NxMessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NxMessageService);
    return NxMessageService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/nx-library/nx-utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NxUtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NxUtilsService = /** @class */ (function () {
    function NxUtilsService() {
    }
    NxUtilsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NxUtilsService);
    return NxUtilsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/nx-library/nx.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nx_message_service__ = __webpack_require__("../../../../../src/app/shared/nx-library/nx-message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nx_cache_service__ = __webpack_require__("../../../../../src/app/shared/nx-library/nx-cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nx_cookie_service__ = __webpack_require__("../../../../../src/app/shared/nx-library/nx-cookie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nx_local_service__ = __webpack_require__("../../../../../src/app/shared/nx-library/nx-local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nx_utils_service__ = __webpack_require__("../../../../../src/app/shared/nx-library/nx-utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NxService = /** @class */ (function () {
    function NxService(message, cache, cookie, utils, local) {
        this.message = message;
        this.cache = cache;
        this.cookie = cookie;
        this.utils = utils;
        this.local = local;
    }
    NxService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__nx_message_service__["a" /* NxMessageService */],
            __WEBPACK_IMPORTED_MODULE_2__nx_cache_service__["a" /* NxCacheService */],
            __WEBPACK_IMPORTED_MODULE_3__nx_cookie_service__["a" /* NxCookieService */],
            __WEBPACK_IMPORTED_MODULE_5__nx_utils_service__["a" /* NxUtilsService */],
            __WEBPACK_IMPORTED_MODULE_4__nx_local_service__["a" /* NxLocalService */]])
    ], NxService);
    return NxService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_nx_library_nx_service__ = __webpack_require__("../../../../../src/app/shared/nx-library/nx.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(http, nx) {
        this.http = http;
        this.nx = nx;
        //BaseUrl = 'http://localhost:8081/';
        this.BaseUrl = 'http://54.158.33.81/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    DataService.prototype.get = function (req) {
        var reqOption = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            params: req.params
        });
        var url = this.BaseUrl + req.url;
        return this.http.get(url, reqOption).map(function (res) {
            return res.json();
        });
    };
    DataService.prototype.post = function (req) {
        var url = this.BaseUrl + req.url;
        return this.http.post(url, req.params, { headers: this.headers }).map(function (res) {
            return res.json();
        });
    };
    DataService.prototype.extractData = function (res) {
        var body = res.json().data;
        return body || {};
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__shared_nx_library_nx_service__["a" /* NxService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nx_library_nx_service__ = __webpack_require__("../../../../../src/app/shared/nx-library/nx.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nx_library_nx_message_service__ = __webpack_require__("../../../../../src/app/shared/nx-library/nx-message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nx_library_nx_cache_service__ = __webpack_require__("../../../../../src/app/shared/nx-library/nx-cache.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nx_library_nx_cookie_service__ = __webpack_require__("../../../../../src/app/shared/nx-library/nx-cookie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nx_library_nx_utils_service__ = __webpack_require__("../../../../../src/app/shared/nx-library/nx-utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nx_library_nx_local_service__ = __webpack_require__("../../../../../src/app/shared/nx-library/nx-local.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_3__nx_library_nx_service__["a" /* NxService */],
                __WEBPACK_IMPORTED_MODULE_5__nx_library_nx_cache_service__["a" /* NxCacheService */],
                __WEBPACK_IMPORTED_MODULE_4__nx_library_nx_message_service__["a" /* NxMessageService */],
                __WEBPACK_IMPORTED_MODULE_6__nx_library_nx_cookie_service__["a" /* NxCookieService */],
                __WEBPACK_IMPORTED_MODULE_7__nx_library_nx_utils_service__["a" /* NxUtilsService */],
                __WEBPACK_IMPORTED_MODULE_8__nx_library_nx_local_service__["a" /* NxLocalService */]
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map