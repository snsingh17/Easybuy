(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <!-- <ion-title>signup</ion-title> -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaulthref=\"login\" text=\"\">\r\n      </ion-back-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"bg-color\">\r\n\r\n    <ion-card class=\"ion-no-margin\">\r\n\r\n        <ion-card-header>\r\n            <ion-card-title>\r\n              Sign Up\r\n            </ion-card-title>\r\n            <ion-card-subtitle>\r\n              Create Your account by filling\r\nup the form\r\n              </ion-card-subtitle>\r\n        </ion-card-header>\r\n             <form [formGroup]=\"ValidationFormUSer\" (ngSubmit)=\"registerUser(ValidationFormUSer.value)\">\r\n       <ion-card-content>\r\n           <ion-item>\r\n               <ion-input name=\"names\" type=\"text\" placeholder=\"FullName\" formControlName=\"names\">\r\n                 <ion-icon name=\"person-outline\"  ></ion-icon>\r\n               </ion-input>\r\n           </ion-item>\r\n              <div>\r\n                <ng-container *ngFor=\"let validation of validationMessages.names\">\r\n\r\n                  <div class=\"error_message\" *ngIf=\"ValidationFormUSer.get('names').hasError(validation.type) && (ValidationFormUSer.get('names').dirty || ValidationFormUSer.get('names').touched)\">\r\n                      {{validation.message}}\r\n                  </div>\r\n\r\n                 </ng-container>\r\n\r\n              </div>\r\n           <ion-item>\r\n               <ion-input name=\"phone\" type=\"text\" placeholder=\"Phone No.\" formControlName=\"phone\">\r\n                 <ion-icon name=\"call-outline\" ></ion-icon>\r\n               </ion-input>\r\n           </ion-item>\r\n           <div>\r\n             <ng-container *ngFor=\"let validation of validationMessages.phone\">\r\n\r\n               <div class=\"error_message\" *ngIf=\"ValidationFormUSer.get('phone').hasError(validation.type) && (ValidationFormUSer.get('phone').dirty || ValidationFormUSer.get('phone').touched)\">\r\n                   {{validation.message}}\r\n               </div>\r\n\r\n              </ng-container>\r\n\r\n           </div>\r\n           <ion-item>\r\n               <ion-input name=\"email\" type=\"text\" placeholder=\"Email\" formControlName=\"email\">\r\n                 <ion-icon name=\"mail-outline\" ></ion-icon>\r\n               </ion-input>\r\n           </ion-item>\r\n           <ng-container *ngFor=\"let validation of validationMessages.email\">\r\n\r\n             <div class=\"error_message\" *ngIf=\"ValidationFormUSer.get('email').hasError(validation.type) && (ValidationFormUSer.get('email').dirty || ValidationFormUSer.get('email').touched)\">\r\n                 {{validation.message}}\r\n             </div>\r\n\r\n            </ng-container>\r\n           <ion-item>\r\n               <ion-input name=\"password\" type=\"password\" placeholder=\"************\" formControlName=\"password\">\r\n                 <ion-icon name=\"lock-closed\" ></ion-icon>\r\n               </ion-input>\r\n           </ion-item>\r\n           <ng-container *ngFor=\"let validation of validationMessages.password\">\r\n\r\n             <div class=\"error_message\" *ngIf=\"ValidationFormUSer.get('password').hasError(validation.type) && (ValidationFormUSer.get('password').dirty || ValidationFormUSer.get('password').touched)\">\r\n                 {{validation.message}}\r\n             </div>\r\n\r\n            </ng-container>\r\n\r\n           <div class=\"sign-btn-wrap\">\r\n              <ion-button  shape=\"round\" type=\"submit\"  fill=\"solid\" class=\"sign-btn\" [disabled]=\"!ValidationFormUSer.valid\">Sign Up</ion-button>\r\n             </div>\r\n\r\n             <div class=\"text-tag\">\r\n             <span>Sign Up with</span>\r\n             </div>\r\n\r\n             <div class=\"social-btns\">\r\n                 <ion-button fill=\"clear\"  class=\"facebookbtn ion-no-padding\">\r\n               <ion-img src=\"assets/images/facebook.png\"></ion-img>\r\n                 </ion-button>\r\n                 <ion-button fill=\"clear\"  class=\"googlebtn ion-no-padding\">\r\n               <ion-img src=\"assets/images/google.png\"></ion-img>\r\n                 </ion-button>\r\n                 <ion-button fill=\"clear\"  class=\"applebtn ion-no-padding\">\r\n               <ion-img src=\"assets/images/apple.png\"></ion-img>\r\n                 </ion-button>\r\n\r\n               </div>\r\n\r\n       </ion-card-content>\r\n        </form>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: transparent;\n  --ion-item-background: transparent !important;\n}\n\n.bg-color {\n  background: #E1EAF9;\n}\n\nion-header {\n  position: absolute;\n}\n\nion-toolbar {\n  --ion-background-color:transparent;\n  --opacity:0;\n}\n\nion-card {\n  --ion-background-color:transparent;\n  box-shadow: none !important;\n  background-color: transparent !important;\n}\n\nion-card-title {\n  margin-top: 50px !important;\n  font-size: 25px;\n  color: #53565A;\n  font-weight: 600;\n  text-align: center;\n}\n\nion-card-subtitle {\n  text-align: center;\n  padding-top: 15px !important;\n  font-size: 13px;\n  color: #888C91;\n  font-weight: 400;\n  text-transform: none;\n  padding: 0 30px;\n}\n\nion-card-content {\n  padding-top: 30px;\n}\n\nion-item {\n  color: #74787E;\n  --border-color:#D4D7DB;\n  --highlight-color-focused:#215AB7;\n  --padding-start:0;\n  --inner-padding-end:0;\n  --highlight-color-invalid: #215AB7;\n  --highlight-color-valid: #215AB7;\n  font-size: 13px;\n}\n\nion-item ion-input {\n  color: #74787E;\n  font-size: 13px;\n}\n\nion-item ion-input ion-icon {\n  padding-right: 6px;\n  font-size: 18px;\n}\n\nion-item ion-input:hover {\n  color: #215AB7;\n}\n\n.sign-btn-wrap {\n  text-align: center;\n  padding-top: 45px;\n}\n\n.sign-btn-wrap .sign-btn {\n  --ion-primary-color:#215AB7;\n  --background:#215AB7;\n  --background-activated:#E1EAF9;\n  --background-focused:#E1EAF9;\n  --background-hover:#647B9D;\n  color: #F4F6FA;\n  background-color: #215AB7;\n  border-radius: 25px;\n}\n\n.text-tag {\n  margin-top: 35px;\n  text-align: center;\n}\n\n.text-tag span {\n  font-size: 13px;\n  font-weight: normal;\n  color: #334862;\n}\n\n.social-btns {\n  margin-top: 18px;\n  text-align: center;\n}\n\n.social-btns ion-button {\n  width: 30px;\n  padding-left: 5px !important;\n}\n\n.error_message {\n  font-size: 6px;\n  font-weight: 200;\n  color: #913e07;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtFQUNBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDRSwyQkFBQTtFQUNBLHdDQUFBO0FBQ0o7O0FBRUM7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNIOztBQUdDO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFBSDs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBRUM7RUFDRSxjQUFBO0VBQ0Msc0JBQUE7RUFFRCxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBRUEsZUFBQTtBQURIOztBQUVHO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFBTDs7QUFDSztFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUNQOztBQUdHO0VBQ0UsY0FBQTtBQURMOztBQVNDO0VBQ0csa0JBQUE7RUFDQSxpQkFBQTtBQU5KOztBQU9HO0VBQ0UsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBTEw7O0FBVUM7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBUEg7O0FBUUc7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBTkw7O0FBVUM7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBUEg7O0FBUUc7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7QUFOTDs7QUFVQztFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFQSCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctY29sb3J7XHJcbiAgYmFja2dyb3VuZDogI0UxRUFGOTtcclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgLS1vcGFjaXR5OjA7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gaW9uLWNhcmQtdGl0bGV7XHJcbiAgIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcclxuICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICBjb2xvcjogIzUzNTY1QTtcclxuICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuIH1cclxuXHJcbiBpb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gICBmb250LXNpemU6IDEzcHg7XHJcbiAgIGNvbG9yOiAjODg4QzkxO1xyXG4gICBmb250LXdlaWdodDogNDAwO1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgcGFkZGluZzogMCAzMHB4O1xyXG4gfVxyXG5cclxuaW9uLWNhcmQtY29udGVudHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG4gaW9uLWl0ZW17XHJcbiAgIGNvbG9yOiM3NDc4N0U7XHJcbiAgICAtLWJvcmRlci1jb2xvcjojRDREN0RCO1xyXG5cclxuICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDojMjE1QUI3O1xyXG4gICAtLXBhZGRpbmctc3RhcnQ6MDtcclxuICAgLS1pbm5lci1wYWRkaW5nLWVuZDowO1xyXG4gICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiAjMjE1QUI3O1xyXG4gICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogIzIxNUFCNztcclxuICAgXHJcbiAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgaW9uLWlucHV0e1xyXG4gICAgIGNvbG9yOiM3NDc4N0U7XHJcbiAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgIGlvbi1pY29ue1xyXG4gICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgIH1cclxuICAgfVxyXG5cclxuICAgaW9uLWlucHV0OmhvdmVye1xyXG4gICAgIGNvbG9yOiMyMTVBQjc7XHJcblxyXG4gICB9XHJcblxyXG5cclxuXHJcbiB9XHJcblxyXG4gLnNpZ24tYnRuLXdyYXB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcclxuICAgLnNpZ24tYnRue1xyXG4gICAgIC0taW9uLXByaW1hcnktY29sb3I6IzIxNUFCNztcclxuICAgICAtLWJhY2tncm91bmQ6IzIxNUFCNztcclxuICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNFMUVBRjk7XHJcbiAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6I0UxRUFGOTtcclxuICAgICAtLWJhY2tncm91bmQtaG92ZXI6IzY0N0I5RDtcclxuICAgICBjb2xvcjojRjRGNkZBO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTVBQjc7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuXHJcbiAgIH1cclxuIH1cclxuXHJcbiAudGV4dC10YWd7XHJcbiAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgc3BhbntcclxuICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICBjb2xvcjojMzM0ODYyO1xyXG4gICB9XHJcbiB9XHJcblxyXG4gLnNvY2lhbC1idG5ze1xyXG4gICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGlvbi1idXR0b257XHJcbiAgICAgd2lkdGg6MzBweDtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiB9XHJcblxyXG4gLmVycm9yX21lc3NhZ2V7XHJcbiAgIGZvbnQtc2l6ZTogNnB4O1xyXG4gICBmb250LXdlaWdodDoyMDA7XHJcbiAgIGNvbG9yOiAjOTEzZTA3O1xyXG4gfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_app_preferences_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/app-preferences/ngx */ "./node_modules/@ionic-native/app-preferences/__ivy_ngcc__/ngx/index.js");







let SignupPage = class SignupPage {
    constructor(router, preference, navCtr, formbuilder, authService, loadingCtrl, alertCtrl) {
        this.router = router;
        this.preference = preference;
        this.navCtr = navCtr;
        this.formbuilder = formbuilder;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.validationMessages = {
            names: [{ type: "required", message: "Please Enter your Full Names" }],
            phone: [{ type: "required", message: "Please Enter your Phone No." }],
            email: [
                { type: 'required', message: "Enter your Email Adress" },
                { type: "pattern", meesage: "Please the Email Entered is Incorrect. Try again.." }
            ],
            password: [
                { type: "required", message: "password is required here" },
                { type: "minlength", message: "Passwrd must be at least 6 character" }
            ]
        };
        this.loading = this.loadingCtrl;
    }
    ngOnInit() {
        this.ValidationFormUSer = this.formbuilder.group({
            names: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
            ]))
        });
    }
    registerUser(value) {
        this.showalert();
        try {
            this.authService.userRegistration(value).then(response => {
                console.log(response);
                if (response.user) {
                    response.user.updateProfile({
                        displayName: value.names,
                        email: value.email,
                        phoneNumber: value.phone
                    });
                    this.preference.store(value.phone, 'userPhoneNumber');
                    this.loading.dismiss();
                    this.router.navigate(['loginscreen']);
                }
            }, error => {
                this.loading.dismiss();
                this.errorLoading(error.message);
            });
        }
        catch (erro) {
            console.log(erro);
        }
    }
    errorLoading(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.alertCtrl.create({
                header: "Error Registering",
                message: message,
                buttons: [{
                        text: 'ok',
                        handler: () => {
                            this.navCtr.navigateBack(['signup']);
                        }
                    }]
            });
            yield loading.present();
        });
    }
    showalert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var load = yield this.loadingCtrl.create({
                message: "please wait....",
            });
            load.present();
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_app_preferences_ngx__WEBPACK_IMPORTED_MODULE_6__["AppPreferences"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");





let AuthService = class AuthService {
    constructor(auth, googleplus) {
        this.auth = auth;
        this.googleplus = googleplus;
    }
    loginFireauth(value) {
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(value.email, value.password).then(res => resolve(res), error => reject(error));
        });
    }
    setUser(user) {
        return this.user = user;
    }
    getUID() {
        return this.user.uid;
    }
    userRegistration(value) {
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(value.email, value.password).then(res => resolve(res), error => reject(error));
        });
    }
    GoogleloginAuth() {
        return this.googleplus.login({
            'scopes': 'profile email',
            'webClientId': '206201421419-u1mp61vt8faleo46c8n4lm3hadsam9i7.apps.googleusercontent.com',
            'offline': true
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__["GooglePlus"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map